import { getRepository } from 'typeorm';
import { IResponseMyData, IResponseSignin } from '../interfaces/IResponse';
import Students from '../models/Students';
import { sign } from 'jsonwebtoken';
import StudentService from './StudentService';
import AppError from '../../../shared/errors/AppError';

interface IParamsAuth {
  tokenSuap: string;
  dataStudent: IResponseMyData;
  password: string;
}

class AuthService {
  async execute({tokenSuap, dataStudent, password}: IParamsAuth): Promise<IResponseSignin | undefined> {
    if(dataStudent.tipo_vinculo !== 'Aluno') {
      throw new AppError('Perfil de usuário inválido');
    }
    const studentRepository = getRepository(Students);

    let student = await studentRepository.findOne({
      where: {suap_id: dataStudent.id}
    })



    if (!student) {
      const studentService = new StudentService();

      student = await studentService.create({...dataStudent, password});
    }

    if(student) {
      const token = sign({
        tokenSuap,
        id: student.id,
        name: student.name,
        profile: 'STUDENT',
      }, process.env.AUTH_SECRET as string, {
        expiresIn: process.env.EXPIRES_IN
      });

      return {token};
    }

  }
}

export default AuthService;
