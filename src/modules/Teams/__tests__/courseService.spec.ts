import "reflect-metadata"
import AppError from "../../../shared/errors/AppError";
import { LevelCourseEnum } from "../enum/LevelCourseEnum";
import { TypeCourseEnum } from "../enum/TypeCourseEnum";
import CourseService from "../services/CourseService";
import FakeCourseRepository from "./fakes/FakeCourseRepository";

let fakeCourseRepository: FakeCourseRepository;
let courseService: CourseService;

describe('Course Service', () => {
  beforeEach(() => {
    fakeCourseRepository = new FakeCourseRepository();
    courseService = new CourseService(fakeCourseRepository);
  })
  it('should create course', async () => {
    const courseFake = {
      name: TypeCourseEnum.Informatica,
      level: LevelCourseEnum.EnsinoMedioIntegrado
    }
    jest.spyOn(fakeCourseRepository, 'create').mockResolvedValue(courseFake as any);

    const course = await courseService.create(courseFake);

    expect(fakeCourseRepository.create).toHaveBeenCalledWith(courseFake);
    expect(course).toEqual(courseFake);
  })
  it('should list all courses', async () => {
    const coursesFake = [{ teste: 'opa' }];

    jest.spyOn(fakeCourseRepository, 'findAll').mockResolvedValue(coursesFake as any);

    const courses = await courseService.index();

    expect(fakeCourseRepository.findAll).toHaveBeenCalled();
    expect(courses).toEqual(coursesFake);
  })
  it('should get course by id', async () => {
    const courseFake = {
      id: 1,
      name: TypeCourseEnum.Informatica,
      level: LevelCourseEnum.EnsinoMedioIntegrado
    }
    jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue(courseFake as any);
    const course = await courseService.indexById({ id: courseFake.id });

    expect(fakeCourseRepository.findById).toHaveBeenCalledWith(courseFake.id);
    expect(course).toEqual(courseFake);
  })
  it('should throw error if course not found', async () => {
    try {
      jest.spyOn(fakeCourseRepository, 'findById').mockResolvedValue(undefined);
      const course = await courseService.indexById({ id: undefined });
      expect(course).toBeUndefined();
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Curso não encontrado');
      expect(error.statusCode).toBe(404);
    }
  })
})
