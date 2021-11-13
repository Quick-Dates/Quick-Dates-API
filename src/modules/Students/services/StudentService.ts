import { hash } from 'bcryptjs';
import { inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import TeamService from '../../Teams/services/TeamService';
import { IParamsCreateStudent } from '../interfaces/IParams';
import IStudentRepository from '../interfaces/IStudentRepository';
import Students from '../models/Students';

class StudentService {

  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,

    @inject('NodeMailerService')
    private nodeMailerService: NodeMailerService,

    @inject('TeamService')
    private teamService: TeamService,
  ) {

  }
  async create({ registration, name, fullName, password, email, birthDate, situation, systematicSituation, gender, suapId  }:
    IParamsCreateStudent): Promise<Students> {
    const hashedPassword = await hash(password, 10);

    const student = await this.studentRepository.create({
      registration,
      name,
      fullName,
      password : hashedPassword,
      email,
      birthDate,
      situation,
      systematicSituation,
      gender,
      suapId
    });

    setTimeout(async () => {
      await this.nodeMailerService.sendEmailWelcome(student);
    }, 3000)

    return student
  }

  async indexById(id: string): Promise<Students> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new AppError('Aluno não encontrado', 404);
    }

    const team = await this.teamService.indexById(student.id_team as number);
    student.team = team;

    delete student.password;
    delete student.suapId;
    delete student.id_team;

    return student;
  }
}


export default StudentService;
