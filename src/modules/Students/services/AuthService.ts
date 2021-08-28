import { getRepository } from 'typeorm';
import { IResponseSignin } from '../interfaces/IResponse';
import Students from '../models/Students';
import { sign } from 'jsonwebtoken';
import StudentService from './StudentService';
import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';

interface IParamsAuth {
  tokenSuap: string;
  dataStudent: any;
  password: string;
}

class AuthService {
  async execute({tokenSuap, dataStudent, password}: IParamsAuth): Promise<IResponseSignin | undefined> {
    if(dataStudent.tipo_vinculo !== 'Aluno') {
      throw new AppError('Perfil de usuário inválido');
    }
    const studentRepository = getRepository(Students);

    let student: any = await studentRepository.findOne({
      where: {suapId: dataStudent.id}
    })

    if (!student) {
      const studentService = new StudentService();

      student = await studentService.create({...dataStudent, password});
    }

    const keysStudent = [
      {student: 'registration', suap: 'matricula'},
      {student: 'name', suap: 'nome_usual'},
      {student: 'fullName', suap: 'vinculo', suap2: 'nome'},
      {student: 'email', suap: 'email'},
      {student: 'birthDate', suap: 'data_nascimento'},
      {student: 'situation', suap: 'vinculo', suap2: 'situacao'},
      {student: 'systematicSituation', suap: 'vinculo' , suap2: 'situacao_sistemica'},
      {student: 'gender', suap: 'sexo'},
      {student: 'suapId', suap: 'id'},
    ];

    let hasChange = false;

    for(const keyStudent of keysStudent) {
      if(keyStudent.suap2) {
        if(student[keyStudent.student] != dataStudent[keyStudent.suap][keyStudent.suap2 as string]) {
          hasChange = true;
          student[keyStudent.student] = dataStudent[keyStudent.suap][keyStudent.suap2 as string];
        }
      } else {
        if(student[keyStudent.student] != dataStudent[keyStudent.suap]) {
          hasChange = true;
          student[keyStudent.student] = dataStudent[keyStudent.suap];
        }
      }
    }
    const passwordMatched = await compare(password, student.password as string)

    if(!passwordMatched) {
      hasChange = true;
      student.password = await hash(password, 10);
    }

    if(hasChange) {
      console.log('Atualizando student...');
      await studentRepository.save({...student});
    }

    if(student) {
      const token = sign({
        tokenSuap,
        id: student.id,
        name: student.name,
        profile: 'STUDENT',
      }, process.env.AUTH_SECRET as string, {
        expiresIn: '1d'
      });

      return {token};
    }

  }
}

export default AuthService;
