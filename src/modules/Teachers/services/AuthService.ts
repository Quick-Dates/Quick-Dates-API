import { IResponseSignin } from '../interfaces/IResponse';
import { sign } from 'jsonwebtoken';
import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import TeacherService from './TeacherService';
import { IParamsAuth } from '../interfaces/IParams';
import { ProfileEnum } from '../../../shared/enum/ProfileEnum';
import { container, inject, injectable } from 'tsyringe';
import ITeacherRepository from '../interfaces/ITeacherRepository';

@injectable()
class AuthService {
  constructor(
    @inject('TeacherRepository')
    private teacherRepository: ITeacherRepository
  ) {

  }
  async execute({tokenSuap, dataTeacher}: IParamsAuth): Promise<IResponseSignin | undefined> {
    if(dataTeacher.tipo_vinculo !== 'Servidor' && dataTeacher.vinculo.categoria !== 'docente') {
      throw new AppError('Perfil de usuário inválido', 401);
    }

    let teacher: any = await this.teacherRepository.findBySuapId(dataTeacher.id)

    if (!teacher) {
      const teacherService = container.resolve(TeacherService);

      teacher = await teacherService.create(dataTeacher);
    }

    let hasChange = this.verifyChangeData(teacher, dataTeacher);

    const passwordMatched = await this.compareCriptografied(dataTeacher.password, teacher.password as string)

    if(!passwordMatched) {
      hasChange = true;
      teacher.password = await hash(dataTeacher.password, 10);
    }

    if(hasChange) {
      await this.teacherRepository.update(teacher.id, teacher);
    }

    if(teacher) {
      const token = this.generateToken({
        tokenSuap,
        id: teacher.id,
        name: teacher.name,
        profile: ProfileEnum.TEACHER,
        email: teacher.email,
      }, process.env.AUTH_SECRET as string);

      return {token};
    }

  }

  verifyChangeData(teacher: any, myDataTeacher: any): boolean {
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
    return hasChange;
  }

  async compareCriptografied(value: string, hash: string): Promise<boolean> {
    return await compare(value, hash);
  }

  generateToken(payload: any, authSecret: string) {
    return sign(payload, authSecret, {
      expiresIn: '5d'
    })
  }
}

export default AuthService;
