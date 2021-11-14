import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import { IParamsCreateTeacher } from '../interfaces/IParams';
import ITeacherRepository from '../interfaces/ITeacherRepository';
import Teachers from '../models/Teachers';

@injectable()
class TeacherService {
  constructor(
    @inject('TeacherRepository')
    private teacherRepository: ITeacherRepository,

    @inject('NodeMailerService')
    private nodeMailerService: NodeMailerService,
  ) {

  }
  async create({ registration, name, fullName, password, email, birthDate, gender, suapId }: IParamsCreateTeacher): Promise<Teachers> {
    const hashedPassword = await hash(password, 10);

    const teacher = await this.teacherRepository.create({
      registration,
      name,
      fullName,
      password: hashedPassword,
      email,
      birthDate,
      gender,
      suapId
    });

    setTimeout(async () => {
      await this.nodeMailerService.sendEmailWelcome(teacher);
    }, 3000)

    return teacher
  }

  async indexById(id: string): Promise<Teachers> {
    const teacher = await this.teacherRepository.findById(id);
    if (!teacher) {
      throw new AppError('Professor não encontrado', 404);
    }

    delete teacher.password;
    delete teacher.suapId;

    return teacher;
  }
}

export default TeacherService;
