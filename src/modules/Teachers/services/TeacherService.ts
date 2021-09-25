import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import { IParamsCreateTeacher } from '../interfaces/IParams';
import Teachers from '../models/Teachers';

class TeacherService {
  async create({id, matricula, nome_usual, email, data_nascimento, vinculo, sexo, password}: IParamsCreateTeacher): Promise<Teachers> {
    const teacherRepository = getRepository(Teachers);

    const hashedPassword = await hash(password, 10);

    const teacher = teacherRepository.create({
      registration: matricula,
      name: nome_usual,
      fullName: vinculo.nome,
      password: hashedPassword,
      email,
      birthDate: data_nascimento,
      gender: sexo,
      suapId: id
    });
    await teacherRepository.save(teacher)

    setTimeout(async ()=>{
      const nodeMailerService = new NodeMailerService();
      await nodeMailerService.sendEmailWelcome(teacher);
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
