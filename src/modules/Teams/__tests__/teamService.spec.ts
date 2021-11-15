import "reflect-metadata"
import { container } from "tsyringe";
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
      jest.spyOn(teamService, 'create').mockImplementation();
      jest.spyOn(fakeTeamRepository, 'findByYearCretionAndIdCourse').mockResolvedValue({} as never);
      jest.spyOn(fakeStudentsRepository, 'findById').mockResolvedValue({} as never);
      jest.spyOn(fakeStudentsRepository, 'update').mockImplementation();
    })
    it('should create course if not found', async() => {
      jest.spyOn(fakeCourseRepository, 'findByNameAndLevel').mockResolvedValue(undefined as never);

      const params = {
        idStudent: 'idStudent',
        yearCretion: 2021,
        courseName: TypeCourseEnum.Informatica,
        levelCourse: LevelCourseEnum.EnsinoMedioIntegrado
      }

      await teamService.addStudentToTeam(...Object.values(params) as [string, number, TypeCourseEnum, LevelCourseEnum]);

      expect(fakeCourseRepository.findByNameAndLevel).toHaveBeenCalledWith(params.courseName, params.levelCourse);
      expect(courseService.create).toHaveBeenCalledWith({name: params.courseName, level: params.levelCourse});
    })
    it.todo('should create team if not found')
    it.todo('should throw error if student not found')
    it.todo('should update id_team in student')
    it.todo('should return team if all succelly')
  })
  describe('#create', () => {
    it.todo('should throw error if course not found')
    it.todo('should throw error if yearCreation > yearCurrent')
    it.todo('should throw error if yearCreation < yearCurrent - 3')
    it.todo('should create team')
    it.todo('should return team if all succelly')
  })
  describe('#index', () => {
    it.todo('should list teams')
  })
  describe('#getTeamsByCourse', () => {
    it.todo('should list teams of course')
    it.todo('should format name of course')
  })
  describe('#indexById', () => {
    it.todo('should find by id team')
    it.todo('should throw error if tean not found')
    it.todo('should format name of team')
  })
  describe('#delete', () => {
    it.todo('should delete team')
    it.todo('should return team deleted')
  })
  describe('#update', () => {
    it.todo('should update team')
    it.todo('should return team updated')
  })
  describe('#indexStudentsByTeam', () => {
    it.todo('should list students of team')
  })
})
