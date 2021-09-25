import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import Teams from '../../Teams/models/Teams';
import TeamService from '../../Teams/services/TeamService';
import { IParamsCreateStudent } from '../interfaces/IParams';
import Students from '../models/Students';

class StudentService {
  async create({id, matricula, nome_usual, email, data_nascimento, vinculo, sexo, password}: IParamsCreateStudent): Promise<Students> {
    const studentRepository = getRepository(Students);

    const hashedPassword = await hash(password, 10);

    const student = studentRepository.create({
      registration: matricula,
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
    await studentRepository.save(student)

    setTimeout(async ()=>{
      const nodeMailerService = new NodeMailerService();
      await nodeMailerService.sendEmailWelcome(student);
    }, 3000)

    return student
  }

  async indexById(id: string): Promise<Students> {
    const studentRepository = getRepository(Students);
    const teamService = new TeamService();


    const student = await studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new AppError('Aluno não encontrado', 404);
    }

    const team = await teamService.indexById(student.id_team as number);
    student.team = team;

    delete student.password;
    delete student.suapId;
    delete student.id_team;

    return student;
  }
}

export default StudentService;
