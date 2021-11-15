import { container, inject, injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import IStudentRepository from '../../Students/interfaces/IStudentRepository';
import Students from '../../Students/models/Students';
import StudentsRepository from '../../Students/repositories/StudentsRepository';
import { LevelCourseEnum } from '../enum/LevelCourseEnum';
import { TypeCourseEnum } from '../enum/TypeCourseEnum';
import ICourseRepository from '../interfaces/ICourseRepository';
import { ITeam } from '../interfaces/ITeam';
import ITeamRepository from '../interfaces/ITeamRepository';
import Courses from '../models/Courses';
import Teams from '../models/Teams';
import CourseRepository from '../repositories/CourseRepository';
import TeamRepository from '../repositories/TeamRepository';
import CourseService from './CourseService';

@injectable()
class TeamService {
  constructor(
    @inject('TeamRepository')
    private teamRepository: ITeamRepository,
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,
  ) { }

  async addStudentToTeam(idStudent: string, yearCreation: number, courseName: TypeCourseEnum, level: LevelCourseEnum): Promise<Teams> {
    const courseService = container.resolve(CourseService);

    let course = await this.courseRepository.findByNameAndLevel(courseName, level);
    if (!course) {
      course = await courseService.create({ name: courseName, level });
    }

    let team = await this.teamRepository.findByYearCretionAndIdCourse(yearCreation, course.id as number );

    if (!team) {
      team = await this.create({ id_course: course.id as number, yearCreation });
    }

    const student = await this.studentRepository.findById(idStudent);
    if (!student) {
      throw new AppError('Aluno não encontrado', 404);
    }
    student.id_team = team.id;
    await this.studentRepository.update(student.id as string, student);
    return team;
  }

  async create({ id_course, yearCreation }: ITeam): Promise<Teams> {
    const course = await this.courseRepository.findById(id_course);
    if (!course) {
      throw new AppError('Curso não existe', 404);
    }
    const yearCurrent = new Date().getFullYear();
    if (yearCreation > yearCurrent) {
      throw new AppError('Ano de criação não pode ser maior que o ano atual', 400);
    }
    if (yearCreation < yearCurrent - 3) {
      throw new AppError('Ano de criação não pode ser maior que 3 anos', 400);
    }

    const team = await this.teamRepository.create({
      yearCreation,
      course,
      id_course
    });

    return team
  }

  async index(): Promise<Teams[]> {
    const teamRepository = getRepository(Teams);

    const yearCurrent = new Date().getFullYear();

    const teams: Teams[] = await teamRepository.createQueryBuilder()
      .select("teams")
      .from(Teams, "teams")
      .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation => :yearCurrent - 3", { yearCurrent })
      .execute();

    return teams
  }

  async getTeamsByCourse(id_course: number): Promise<Teams[]> {
    const teamRepository = getRepository(Teams);

    const yearCurrent = new Date().getFullYear();

    const teams: Teams[] = await teamRepository.createQueryBuilder()
      .select("*")
      .from(Teams, "teams")
      .where("teams.yearCreation <= :yearCurrent AND teams.yearCreation >= :yearCurrent - 3", { yearCurrent })
      .andWhere("teams.id_course = :id_course", { id_course })
      .execute();

    const teamsNotDuplicate: Teams[] = teams.filter((team, index) => teams.findIndex(t => t.id === team.id) === index);

    return teamsNotDuplicate.map(team => {
      return {
        ...team,
        name: `${(yearCurrent - team.yearCreation) + 1}° ano`
      }
    })
  }

  async indexById(id: number): Promise<Teams> {
    const teamRepository = getRepository(Teams);

    const team = await teamRepository.findOne({ where: { id } });
    if (!team) {
      throw new AppError('Turma não encontrada', 404);
    }
    const yearCurrent = new Date().getFullYear();
    team.name = `${(yearCurrent - team.yearCreation) + 1}° ano`

    return team
  }

  async delete(id: number): Promise<Teams> {
    const teamRepository = getRepository(Teams);

    const team = await teamRepository.findOne({ where: { id } });
    if (!team) {
      throw new AppError('Turma não encontrada', 404);
    }
    await teamRepository.delete({ id });

    return team
  }

  async update(id: number, teamData: ITeam): Promise<Teams | undefined> {
    const teamRepository = getRepository(Teams);

    const team = await teamRepository.findOne({ where: { id } });
    if (!team) {
      throw new AppError('Turma não encontrada', 404);
    }

    await teamRepository.update({ id }, teamData);

    return team
  }

  indexStudentsByTeam(id: number): Promise<Students[]> {
    const studentRepository = getRepository(Students);

    return studentRepository.find({ where: { id_team: id } })
  }
}

export default TeamService;
