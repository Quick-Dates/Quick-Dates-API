import "reflect-metadata"
import { container } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import FakeStudentsRepository from "../../Students/__tests__/fakes/FakeStudentsRepository";
import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";
import CourseService from "../services/CourseService";
import TeamService from "../services/TeamService"
import FakeCourseRepository from "./fakes/FakeCourseRepository";
import FakeTeamRepository from "./fakes/FakeTeamRepository";

let fakeTeamRepository: FakeTeamRepository;
let fakeCourseRepository: FakeCourseRepository;
let fakeStudentsRepository: FakeStudentsRepository;
let teamService: TeamService;
let courseService: CourseService;

describe('TeamService', () => {
  beforeEach(() => {
    fakeTeamRepository = new FakeTeamRepository();
    fakeCourseRepository = new FakeCourseRepository();
    fakeStudentsRepository = new FakeStudentsRepository();
    teamService = new TeamService(fakeTeamRepository, fakeCourseRepository, fakeStudentsRepository);
    courseService = new CourseService(fakeCourseRepository);
  });
  describe('#addStudentToTeam', () => {
    beforeEach(() => {
      jest.spyOn(container, 'resolve').mockReturnValue(courseService as never);
      jest.spyOn(courseService, 'create').mockResolvedValue({} as never);
      jest.spyOn(fakeCourseRepository, 'findByNameAndLevel').mockResolvedValue({} as never);
      jest.spyOn(teamService, 'create').mockResolvedValue({} as never);
      jest.spyOn(fakeTeamRepository, 'findByYearCretionAndIdCourse').mockResolvedValue({} as never);
      jest.spyOn(fakeStudentsRepository, 'findById').mockResolvedValue({} as never);
      jest.spyOn(fakeStudentsRepository, 'update').mockImplementation();
    })
    it('should create course if not found', async () => {
      jest.spyOn(fakeCourseRepository, 'findByNameAndLevel').mockResolvedValue(undefined as never);

      const params = {
        idStudent: 'idStudent',
        yearCretion: 2021,
        courseName: TypeCourseEnum.Informatica,
        levelCourse: LevelCourseEnum.EnsinoMedioIntegrado
      }

      await teamService.addStudentToTeam(...Object.values(params) as [string, number, TypeCourseEnum, LevelCourseEnum]);

      expect(fakeCourseRepository.findByNameAndLevel).toHaveBeenCalledWith(params.courseName, params.levelCourse);
      expect(courseService.create).toHaveBeenCalledWith({ name: params.courseName, level: params.levelCourse });
    })
    it('should create team if not found', async () => {

      const fakeCourse = {
        id: 1
      }
      jest.spyOn(fakeCourseRepository, 'findByNameAndLevel').mockResolvedValue(fakeCourse as never);
      jest.spyOn(fakeTeamRepository, 'findByYearCretionAndIdCourse').mockResolvedValue(undefined as never);

      const params = {
        idStudent: 'idStudent',
        yearCreation: 2021,
        courseName: TypeCourseEnum.Informatica,
        levelCourse: LevelCourseEnum.EnsinoMedioIntegrado
      }

      await teamService.addStudentToTeam(...Object.values(params) as [string, number, TypeCourseEnum, LevelCourseEnum]);

      expect(fakeTeamRepository.findByYearCretionAndIdCourse).toHaveBeenCalledWith(fakeCourse.id, params.yearCreation);
      expect(teamService.create).toHaveBeenCalledWith({ yearCreation: params.yearCreation, id_course: fakeCourse.id });
    })
    it('should throw error if student not found', async () => {
      try {
        jest.spyOn(fakeStudentsRepository, 'findById').mockResolvedValue(undefined as never);
        const params = {
          idStudent: 'idStudent',
          yearCreation: 2021,
          courseName: TypeCourseEnum.Informatica,
          levelCourse: LevelCourseEnum.EnsinoMedioIntegrado
        }

        await teamService.addStudentToTeam(...Object.values(params) as [string, number, TypeCourseEnum, LevelCourseEnum]);
        expect(true).toBe(false);

      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Aluno n??o encontrado');
        expect(error.statusCode).toBe(404);
      }

    })
    it('should update id_team in student', async () => {
      const fakeTeam = {
        id: 1
      }
      const fakeStudent = {
        id: 'idStudent',
      }

      jest.spyOn(fakeTeamRepository, 'findByYearCretionAndIdCourse').mockResolvedValue(fakeTeam as never);
      jest.spyOn(fakeStudentsRepository, 'findById').mockResolvedValue(fakeStudent as never);

      const params = {
        idStudent: 'idStudent',
        yearCreation: 2021,
        courseName: TypeCourseEnum.Informatica,
        level: LevelCourseEnum.EnsinoMedioIntegrado
      }

      const team = await teamService.addStudentToTeam(...Object.values(params) as [string, number, TypeCourseEnum, LevelCourseEnum]);

      expect(fakeStudentsRepository.update).toHaveBeenCalledWith(params.idStudent, { id_team: fakeTeam.id, id: fakeStudent.id,
        team: fakeTeam });
      expect(fakeStudentsRepository.findById).toHaveBeenCalledWith(params.idStudent);
      expect(team).toEqual(fakeTeam);
    })
  })
  describe('#create', () => {
    it('should throw error if course not found', async () => {
      try {
        jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue(undefined as never);
        const params = { yearCreation: 2021, id_course: 'id_course' }
        await teamService.create(params as never);
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Curso n??o existe');
        expect(error.statusCode).toBe(404);
      }
    })
    it('should throw error if yearCreation > yearCurrent', async () => {
      try {
        jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue({ yearCreation: 2021 } as never);
        jest.useFakeTimers().setSystemTime(new Date(2020, 1, 1).getTime());

        const params = { yearCreation: 2021, id_course: 'id_course' }
        await teamService.create(params as never);

        expect(true).toBe(false);

      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Ano de cria????o n??o pode ser maior que o ano atual');
        expect(error.statusCode).toBe(400);
      }
    })
    it('should throw error if yearCreation < yearCurrent - 3', async () => {
      try {
        jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue({ yearCreation: 2021 } as never);
        jest.useFakeTimers().setSystemTime(new Date(2025, 1, 1).getTime());

        const params = { yearCreation: 2021, id_course: 'id_course' }
        await teamService.create(params as never);

        expect(true).toBe(false);

      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Ano de cria????o n??o pode ser maior que 3 anos');
        expect(error.statusCode).toBe(400);
      }
    })
    it('should create team', async () => {
      const fakeCourse = { yearCreation: 2021 }
      const fakeTeam = { id: 11 }
      jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue(fakeCourse as never);
      jest.useFakeTimers().setSystemTime(new Date(2021, 1, 1).getTime());
      jest.spyOn(fakeTeamRepository, 'create').mockResolvedValue(fakeTeam as never);

      const params = { yearCreation: 2021, id_course: 'id_course' }
      const team = await teamService.create(params as never);

      expect(fakeTeamRepository.create).toHaveBeenCalledWith({ ...params, course: fakeCourse } as never);
      expect(team).toEqual(fakeTeam);
    })
  })
  describe('#index', () => {
    it('should list teams', async () => {
      const fakeYearCurrent = 2022;
      const fakeTeams = [{ id: 1 }, { id: 2 }];

      jest.useFakeTimers().setSystemTime(new Date(fakeYearCurrent, 1, 1).getTime());
      jest.spyOn(fakeTeamRepository, 'findAll').mockResolvedValue(fakeTeams as never);

      const teams = await teamService.index();

      expect(fakeTeamRepository.findAll).toHaveBeenCalledWith(fakeYearCurrent);
      expect(teams).toEqual(fakeTeams);
    })
  })
  describe('#getTeamsByCourse', () => {
    it('should list teams of course', async () => {
      const fakeCourse = { id: 1 }
      const fakeYearCurrent = 2022;
      const fakeYearCreation = 2021;
      const fakeTeams = [
        { id: 1, yearCreation: fakeYearCreation, name: `${(fakeYearCurrent - fakeYearCreation) + 1}?? ano` },
        { id: 2, yearCreation: fakeYearCreation, name: `${(fakeYearCurrent - fakeYearCreation) + 1}?? ano` }];

      jest.useFakeTimers().setSystemTime(new Date(fakeYearCurrent, 1, 1).getTime());
      jest.spyOn(fakeTeamRepository, 'findAllByCourse').mockResolvedValue(fakeTeams as never);

      const teams = await teamService.getTeamsByCourse(fakeCourse.id);

      expect(fakeTeamRepository.findAllByCourse).toHaveBeenCalledWith(fakeCourse.id, fakeYearCurrent);
      expect(teams).toEqual(fakeTeams);
    })
  })
  describe('#indexById', () => {
    it('should throw error if team not found', async () => {
      try {
        const fakeTeam = { id: 1 }
        await teamService.indexById(fakeTeam.id);
        expect(true).toBe(false);
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Turma n??o encontrada');
        expect(error.statusCode).toBe(404);
      }
    })
    it('should find by id team', async () => {
      const fakeTeam = { id: 1, yearCreation: 2021 }
      const fakeYearCurrent = 2022;

      jest.useFakeTimers().setSystemTime(new Date(fakeYearCurrent, 1, 1).getTime());
      jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam as never);
      const team = await teamService.indexById(fakeTeam.id);

      expect(fakeTeamRepository.findById).toHaveBeenCalledWith(fakeTeam.id);
      expect(team).toEqual({ ...fakeTeam, name: `${(fakeYearCurrent - fakeTeam.yearCreation) + 1}?? ano` });
    })
  })
  describe('#delete', () => {
    it('should delete team', async () => {
      const fakeTeam = { id: 1 }

      jest.spyOn(teamService, 'indexById').mockResolvedValue(fakeTeam as never);
      jest.spyOn(fakeTeamRepository, 'delete').mockImplementation();

      const team = await teamService.delete(fakeTeam.id);

      expect(teamService.indexById).toHaveBeenCalledWith(fakeTeam.id);
      expect(fakeTeamRepository.delete).toHaveBeenCalledWith(fakeTeam.id);
      expect(team).toEqual(fakeTeam);
    })
  })
  describe('#update', () => {
    it('should update team', async() => {
      const fakeTeam = { id: 1, teste: 'teste' }

      jest.spyOn(teamService, 'indexById').mockResolvedValue(fakeTeam as never);
      jest.spyOn(fakeTeamRepository, 'update').mockImplementation();

      const team = await teamService.update(fakeTeam.id, fakeTeam as never);

      expect(teamService.indexById).toHaveBeenCalledWith(fakeTeam.id);
      expect(fakeTeamRepository.update).toHaveBeenCalledWith(fakeTeam.id, fakeTeam);
      expect(team).toEqual(fakeTeam);
    })
  })
  describe('#indexStudentsByTeam', () => {
    it('should list students of team', async() => {
      const fakeTeam = { id: 1 }
      const fakeStudents = [{ id: 1 }, { id: 2 }]

      jest.spyOn(fakeStudentsRepository, 'findAllByTeamId').mockResolvedValue(fakeStudents as never);

      const students = await teamService.indexStudentsByTeam(fakeTeam.id);

      expect(fakeStudentsRepository.findAllByTeamId).toHaveBeenCalledWith(fakeTeam.id);
      expect(students).toEqual(fakeStudents);
    })
  })
})
