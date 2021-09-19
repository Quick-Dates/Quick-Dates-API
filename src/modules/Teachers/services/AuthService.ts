import { getRepository } from 'typeorm';
import { IResponseSignin } from '../interfaces/IResponse';
import { sign } from 'jsonwebtoken';
import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import Teachers from '../models/Teachers';
import TeacherService from './TeacherService';
import { IParamsAuth } from '../interfaces/IParams';

class AuthService {
  async execute({tokenSuap, dataTeacher}: IParamsAuth): Promise<IResponseSignin | undefined> {
    if(dataTeacher.tipo_vinculo !== 'Servidor' && dataTeacher.vinculo.categoria !== 'docente') {
      throw new AppError('Perfil de usuário inválido');
    }
    const teacherRepository = getRepository(Teachers);

    let teacher: any = await teacherRepository.findOne({
      where: {suapId: dataTeacher.id}
    })

    if (!teacher) {
      const teacherService = new TeacherService();

      teacher = await teacherService.create(dataTeacher);
    }

    const keysTeacher = [
      {teacher: 'registration', suap: 'matricula'},
      {teacher: 'name', suap: 'nome_usual'},
      {teacher: 'fullName', suap: 'vinculo', suap2: 'nome'},
      {teacher: 'email', suap: 'email'},
      {teacher: 'birthDate', suap: 'data_nascimento'},
      {teacher: 'gender', suap: 'sexo'},
      {teacher: 'suapId', suap: 'id'},
    ];

    let hasChange = false;
    const myDataTeacher = dataTeacher as any;

    for(const keyTeacher of keysTeacher) {
      if(keyTeacher.suap2) {
        if(teacher[keyTeacher.teacher] != myDataTeacher[keyTeacher.suap][keyTeacher.suap2 as string]) {
          hasChange = true;
          teacher[keyTeacher.teacher] = myDataTeacher[keyTeacher.suap][keyTeacher.suap2 as string];
        }
      } else {
        if(teacher[keyTeacher.teacher] != myDataTeacher[keyTeacher.suap]) {
          hasChange = true;
          teacher[keyTeacher.teacher] = myDataTeacher[keyTeacher.suap];
        }
      }
    }
    const passwordMatched = await compare(dataTeacher.password, teacher.password as string)

    if(!passwordMatched) {
      hasChange = true;
      teacher.password = await hash(dataTeacher.password, 10);
    }

    if(hasChange) {
      await teacherRepository.save({...teacher});
    }

    if(teacher) {
      const token = sign({
        tokenSuap,
        id: teacher.id,
        name: teacher.name,
        profile: 'TEACHER',
      }, process.env.AUTH_SECRET as string, {
        expiresIn: '1d'
      });

      return {token};
    }

  }
}

export default AuthService;
