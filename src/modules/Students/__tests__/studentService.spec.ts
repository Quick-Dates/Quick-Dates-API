import "reflect-metadata";
import AppError from '../../../shared/errors/AppError';
import StudentService from '../services/StudentService';
import FakeStudentsRepository from './fakes/FakeStudentsRepository';
import bcryptjs from 'bcryptjs';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import TeamService from '../../Teams/services/TeamService';
import { container } from 'tsyringe';


let fakeStudentsRepository: FakeStudentsRepository;
let studentService: StudentService;
let nodeMailerService: NodeMailerService;
let teamService: TeamService;

describe('StudentService', () => {
  beforeEach(() => {
    fakeStudentsRepository = new FakeStudentsRepository();
    nodeMailerService = new NodeMailerService();
    teamService = new TeamService();
    studentService = new StudentService(fakeStudentsRepository, nodeMailerService, teamService)
    jest.spyOn(container, 'resolve').mockReturnValue(studentService);
    jest.spyOn(fakeStudentsRepository, 'update').mockImplementation();
    jest.spyOn(fakeStudentsRepository, 'create').mockImplementation();
    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockReturnValue({} as any);
    jest.spyOn(global, 'setTimeout').mockImplementation();
    jest.spyOn(nodeMailerService, 'sendEmailWelcome').mockImplementation();
  });
  it('should encrypt password before creating a student', async () => {
    const fakeStudent = {
      password: 'password'
    };

    jest.spyOn(bcryptjs, 'hash').mockResolvedValue('password_encrypt' as never);
    await studentService.create(fakeStudent as any)

    expect(bcryptjs.hash).toHaveBeenCalledWith(fakeStudent.password, 10);
    expect(fakeStudentsRepository.create).toHaveBeenCalledWith({ password: 'password_encrypt' });
  })
  it('should creating student', async () => {
    const fakeStudent = {
      password: 'password_encrypt',
      birthDate: 'birthDate',
      email: 'email',
      fullName: 'fullName',
      gender: 'gender',
      name: 'name',
      registration: 0,
      situation: 'situation',
      suapId: 'suapId',
      systematicSituation: 'systematicSituation'
    }

    jest.spyOn(fakeStudentsRepository, 'create').mockResolvedValue(fakeStudent as any);
    const student = await studentService.create(fakeStudent as any)

    expect(fakeStudentsRepository.create).toHaveBeenCalledWith(fakeStudent);
    expect(student).toEqual(fakeStudent);
  })
  it('should send email welcome to student after creating in 3 secs', async () => {
    const fakeStudent = {}

    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout').mockRestore();
    jest.spyOn(fakeStudentsRepository, 'create').mockReturnValue(fakeStudent as any);
    await studentService.create(fakeStudent as any)

    expect(nodeMailerService.sendEmailWelcome).not.toHaveBeenCalled();

    jest.advanceTimersByTime(3000)

    expect(nodeMailerService.sendEmailWelcome).toHaveBeenCalledWith(fakeStudent);
    expect(nodeMailerService.sendEmailWelcome).toHaveBeenCalledTimes(1);
  })
  it('should throw error if student not found', async () => {
    try {
      jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockResolvedValue(undefined);

      await studentService.indexById('');

      expect(true).toBe(false);
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Aluno não encontrado');
      expect(error.statusCode).toBe(404);
    }
  })
  it('should return student by id', async () => {
    const fakeStudent = {
      teste: '',
      id_team: 'idTeam'
    }
    const fakeTeam = {
      testeTeam: ''
    }
    jest.spyOn(fakeStudentsRepository, 'findById').mockResolvedValue(fakeStudent as any);
    jest.spyOn(teamService, 'indexById').mockResolvedValue(fakeTeam as any);

    const student = await studentService.indexById('id');

    expect(student).toEqual({...fakeStudent, team: fakeTeam});
    expect(fakeStudentsRepository.findById).toHaveBeenCalledWith('id');
    expect(teamService.indexById).toHaveBeenCalledWith('idTeam');
  })
})
