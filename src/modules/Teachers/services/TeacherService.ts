import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { IParamsCreateTeacher } from '../interfaces/IParams';
import Teachers from '../models/Teachers';

class Teacherservice {
  async create({id, matricula, nome_usual, email, data_nascimento, vinculo, sexo, password}: IParamsCreateTeacher): Promise<Teachers> {
    const teacherRepository = getRepository(Teachers);

    const hashedPassword = await hash(password, 10);

    const teacher = teacherRepository.create({
      siap: matricula,
      name: nome_usual,
      fullName: vinculo.nome,
      password: hashedPassword,
      email,
      birthDate: data_nascimento,
      situation: vinculo.situacao,
      systematicSituation: vinculo.situacao_sistemica,
      gender: sexo,
      suapId: id
    });
    await teacherRepository.save(teacher)

    return teacher
  }
}

export default Teacherservice;
