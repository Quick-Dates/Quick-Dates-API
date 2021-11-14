import "reflect-metadata";
import AppError from '../../../shared/errors/AppError';
import bcryptjs from 'bcryptjs';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import { container } from 'tsyringe';
import FakeTeachersRepository from "./fakes/FakeTeachersRepository";
import TeacherService from "../services/TeacherService";


let fakeTeacherRepository: FakeTeachersRepository;
let teacherService: TeacherService;
let nodeMailerService: NodeMailerService;

describe('TeacherService', () => {
  beforeEach(() => {
    fakeTeacherRepository = new FakeTeachersRepository();
    nodeMailerService = new NodeMailerService();
    teacherService = new TeacherService(fakeTeacherRepository, nodeMailerService)
    jest.spyOn(container, 'resolve').mockReturnValue(teacherService);
    jest.spyOn(fakeTeacherRepository, 'update').mockImplementation();
    jest.spyOn(fakeTeacherRepository, 'create').mockImplementation();
    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockReturnValue({} as any);
    jest.spyOn(global, 'setTimeout').mockImplementation();
    jest.spyOn(nodeMailerService, 'sendEmailWelcome').mockImplementation();
  });
  it('should encrypt password before creating a teacher', async () => {
    const fakeTeacher = {
      password: 'password'
    };

    jest.spyOn(bcryptjs, 'hash').mockResolvedValue('password_encrypt' as never);
    await teacherService.create(fakeTeacher as any)

    expect(bcryptjs.hash).toHaveBeenCalledWith(fakeTeacher.password, 10);
    expect(fakeTeacherRepository.create).toHaveBeenCalledWith({ password: 'password_encrypt' });
  })
  it('should creating teacher', async () => {
    const fakeTeacher = {
      password: 'password_encrypt',
      birthDate: 'birthDate',
      email: 'email',
      fullName: 'fullName',
      gender: 'gender',
      name: 'name',
      registration: 0,
      suapId: 'suapId',
    }

    jest.spyOn(fakeTeacherRepository, 'create').mockResolvedValue(fakeTeacher as any);
    const teacher = await teacherService.create(fakeTeacher as any)

    expect(fakeTeacherRepository.create).toHaveBeenCalledWith(fakeTeacher);
    expect(teacher).toEqual(fakeTeacher);
  })
  it('should send email welcome to teacher after creating in 3 secs', async () => {
    const fakeTeacher = {}

    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout').mockRestore();
    jest.spyOn(fakeTeacherRepository, 'create').mockReturnValue(fakeTeacher as any);
    await teacherService.create(fakeTeacher as any)

    expect(nodeMailerService.sendEmailWelcome).not.toHaveBeenCalled();

    jest.advanceTimersByTime(3000)

    expect(nodeMailerService.sendEmailWelcome).toHaveBeenCalledWith(fakeTeacher);
    expect(nodeMailerService.sendEmailWelcome).toHaveBeenCalledTimes(1);
  })
  it('should throw error if teacher not found', async () => {
    try {
      jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockResolvedValue(undefined);

      await teacherService.indexById('');

      expect(true).toBe(false);
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Professor não encontrado');
      expect(error.statusCode).toBe(404);
    }
  })
  it('should return teacher by id', async () => {
    const fakeTeacher = {
      teste: '',
    }

    jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher as any);

    const teacher = await teacherService.indexById('id');

    expect(teacher).toEqual(fakeTeacher);
    expect(fakeTeacherRepository.findById).toHaveBeenCalledWith('id');
  })
})
