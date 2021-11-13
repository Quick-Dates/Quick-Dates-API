import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import TeamService from '../../Teams/services/TeamService';
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
  async create({id, matricula, nome_usual, email, data_nascimento, vinculo, sexo, password}: IParamsCreateTeacher): Promise<Teachers> {
    const hashedPassword = await hash(password, 10);

    const teacher = await this.teacherRepository.create({
      registration: matricula,
      name: nome_usual,
      fullName: vinculo.nome,
      password: hashedPassword,
      email,
      birthDate: data_nascimento,
      gender: sexo,
      suapId: id
    });

    setTimeout(async ()=>{
      await this.nodeMailerService.sendEmailWelcome(teacher);
    }, 3000)

    return teacher
  }

  async indexById(id: string): Promise<Teachers> {
    const teacherRepository = getRepository(Teachers);

    const teacher = await teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new AppError('Professor não encontrado', 404);
    }

    delete teacher.password;
    delete teacher.suapId;

    return teacher;
  }
}

export default TeacherService;
