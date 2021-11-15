import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Students from '../../Students/models/Students';
import { LevelCourseEnum } from '../enum/LevelCourseEnum';
import { TypeCourseEnum } from '../enum/TypeCourseEnum';
import { ITeam } from '../interfaces/ITeam';
import Courses from '../models/Courses';
import Teams from '../models/Teams';
import CourseService from './CourseService';

class TeamService {

  async addStudentToTeam(idStudent: string, yearCreation: number, courseName: TypeCourseEnum, level: LevelCourseEnum): Promise<Teams> {
    const teamRepository = getRepository(Teams);
    const courseRepository = getRepository(Courses);
    const studentRepository = getRepository(Students);
    const courseService = container.resolve(CourseService);

    let course = await courseRepository.findOne({ where: { name: courseName, level} });
    if (!course) {
      course = await courseService.create({ name: courseName, level });
    }

    let team = await teamRepository.findOne({ where: { yearCreation, id_course: course.id } });
    if (!team) {
      team = await this.create({ id_course: course.id as number, yearCreation });
    }

    const student = await studentRepository.findOne({ where: { id: idStudent } });
    if (!student) {
      throw new AppError('Aluno não encontrado', 404);
    }
    student.id_team = team.id;
    await studentRepository.update({ id: student.id }, student);
    return team;
  }

  async create({ id_course, yearCreation }: ITeam): Promise<Teams> {
    const teamRepository = getRepository(Teams);
    const courseRepository = getRepository(Courses);

    const course = await courseRepository.findOne({ where: { id: id_course } });
    if (!course) {
      throw new AppError('Curso não existe', 404);
    }
    const yearCurrent = new Date().getFullYear();
    if (yearCreation > yearCurrent) {
      throw new AppError('Ano de criação não pode ser maior que o ano atual', 400);
    }
    if (yearCreation < yearCurrent - 3) {
      throw new AppError('Ano de criação não pode ser menor que 3 anos', 400);
    }

    const team = teamRepository.create({
      yearCreation,
      course,
      id_course
    });

    await teamRepository.save(team)

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
