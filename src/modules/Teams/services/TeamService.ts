import { container, inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IStudentRepository from '../../Students/interfaces/IStudentRepository';
import Students from '../../Students/models/Students';
import { LevelCourseEnum } from '../enum/LevelCourseEnum';
import { TypeCourseEnum } from '../enum/TypeCourseEnum';
import ICourseRepository from '../interfaces/ICourseRepository';
import { ITeam } from '../interfaces/ITeam';
import ITeamRepository from '../interfaces/ITeamRepository';
import Teams from '../models/Teams';
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
    const yearCurrent = new Date().getFullYear();

    const teams: Teams[] = await this.teamRepository.findAll(yearCurrent);

    return teams
  }

  async getTeamsByCourse(id_course: number): Promise<Teams[]> {
    const yearCurrent = new Date().getFullYear();

    const teams: Teams[] = await this.teamRepository.findAllByCourse(id_course, yearCurrent);

    return teams.map(team => {
      return {
        ...team,
        name: `${(yearCurrent - team.yearCreation) + 1}° ano`
      }
    })
  }

  async indexById(id: number): Promise<Teams> {
    const team = await this.teamRepository.findById(id);
    if (!team) {
      throw new AppError('Turma não encontrada', 404);
    }
    const yearCurrent = new Date().getFullYear();

    team.name = `${(yearCurrent - team.yearCreation) + 1}° ano`

    return team
  }

  async delete(id: number): Promise<Teams> {
    const team = await this.indexById(id);
    await this.teamRepository.delete(id);

    return team
  }

  async update(id: number, teamData: ITeam): Promise<ITeam | undefined> {
    const team = await this.indexById(id);

    await this.teamRepository.update(team.id as number, teamData as Teams);

    return teamData
  }

  async indexStudentsByTeam(id: number): Promise<Students[]> {
    return await this.studentRepository.findAllByTeamId(id)
  }
}

export default TeamService;
