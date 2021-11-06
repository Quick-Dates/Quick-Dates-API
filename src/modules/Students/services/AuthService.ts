import { getRepository } from 'typeorm';
import { IResponseSignin } from '../interfaces/IResponse';
import Students from '../models/Students';
import { sign } from 'jsonwebtoken';
import StudentService from './StudentService';
import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { ProfileEnum } from '../../../shared/enum/ProfileEnum';
import { inject, injectable } from 'tsyringe';
import IStudentRepository from '../interfaces/IStudentRepository';

interface IParamsAuth {
  tokenSuap: string;
  dataStudent: any;
  password: string;
}

@injectable()
class AuthService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,

    @inject('StudentService')
    private studentService: StudentService
  ) {

  }

  async execute({ tokenSuap, dataStudent, password }: IParamsAuth): Promise<IResponseSignin | undefined> {
    if (dataStudent.tipo_vinculo !== 'Aluno') {
      throw new AppError('Perfil de usuário inválido');
    }
    let student: Students = await this.studentRepository.findBySuapId(dataStudent.id) as Students;

    if (!student) {
      student = await this.studentService.create({ ...dataStudent, password });
    }

    let hasChange = this.verifyChangeData(student, dataStudent);

    const passwordMatched = await this.compareCriptografied(password, student?.password as string)

    if (!passwordMatched) {
      hasChange = true;
      student.password = await hash(password, 10);
    }

    if (hasChange) {
      await this.studentRepository.update(student.id, { ...student });
    }

    if (student) {
      const course = this.thirdWordInUpperCase(dataStudent?.vinculo?.curso);

      const token = this.generateToken({
        tokenSuap,
        id: student.id,
        name: student.name,
        profile: ProfileEnum.STUDENT,
        email: student.email,
        course
      }, process.env.AUTH_SECRET as string);
      return { token };
    }

  }

  verifyChangeData(student: any, dataStudent: any): boolean {
    const keysStudent = [
      { student: 'registration', suap: 'matricula' },
      { student: 'name', suap: 'nome_usual' },
      { student: 'fullName', suap: 'vinculo', suap2: 'nome' },
      { student: 'email', suap: 'email' },
      { student: 'birthDate', suap: 'data_nascimento' },
      { student: 'situation', suap: 'vinculo', suap2: 'situacao' },
      { student: 'systematicSituation', suap: 'vinculo', suap2: 'situacao_sistemica' },
      { student: 'gender', suap: 'sexo' },
      { student: 'suapId', suap: 'id' },
    ];

    let hasChange = false;

    for (const keyStudent of keysStudent) {
      if (keyStudent.suap2) {
        if (student[keyStudent.student] != dataStudent[keyStudent.suap][keyStudent.suap2 as string]) {
          hasChange = true;
          student[keyStudent.student] = dataStudent[keyStudent.suap][keyStudent.suap2 as string];
        }
      } else {
        if (student[keyStudent.student] != dataStudent[keyStudent.suap]) {
          hasChange = true;
          student[keyStudent.student] = dataStudent[keyStudent.suap];
        }
      }
    }
    return hasChange;
  }

  async compareCriptografied(value: string, hash: string): Promise<boolean> {
    return await compare(value, hash);
  }


  thirdWordInUpperCase(word: string): string {
    return word
      .split(' ')[2]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }

  generateToken(payload: any, authSecret: string) {
    return sign(payload, authSecret, {
      expiresIn: '5d'
    })
  }
}

export default AuthService;
