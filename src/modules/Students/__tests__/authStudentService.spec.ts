import AuthService from '../services/AuthService';
import AppError from '../../../shared/errors/AppError';
import StudentService from '../services/StudentService';
import FakeStudentsRepository from './fakes/FakeStudentsRepository';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { ProfileEnum } from '../../../shared/enum/ProfileEnum';
import NodeMailerService from '../../../shared/services/NodeMailerService';
import TeamService from '../../Teams/services/TeamService';
import { container } from 'tsyringe';
import FakeTeamRepository from '../../Teams/__tests__/fakes/FakeTeamRepository';
import FakeCourseRepository from '../../Teams/__tests__/fakes/FakeCourseRepository';

let fakeStudentsRepository: FakeStudentsRepository;
let fakeTeamRepository: FakeTeamRepository;
let fakeCourseRepository: FakeCourseRepository;
let studentService: StudentService;
let authStudentService: AuthService;
let nodeMailerService: NodeMailerService;
let teamService: TeamService;
const dataFake: any = {
  dataStudent: {
    tipo_vinculo: 'Aluno',
    id: 'id_valido',
    vinculo: {
      curso: 'Ensino medio Informática'
    }
  },
  password: 'password-invalid',
  tokenSuap: ''
}


describe('AuthService', () => {
  beforeEach(() => {
    fakeStudentsRepository = new FakeStudentsRepository();
    fakeTeamRepository = new FakeTeamRepository();
    fakeCourseRepository = new FakeCourseRepository();
    nodeMailerService = new NodeMailerService();
    teamService = new TeamService(fakeTeamRepository, fakeCourseRepository, fakeStudentsRepository);
    studentService = new StudentService(fakeStudentsRepository, nodeMailerService, teamService)
    authStudentService = new AuthService(fakeStudentsRepository);

    jest.spyOn(container, 'resolve').mockReturnValue(studentService);
    jest.spyOn(studentService, 'create').mockImplementation();
    jest.spyOn(fakeStudentsRepository, 'update').mockImplementation();
    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockReturnValue({} as any);
    jest.spyOn(authStudentService, 'verifyChangeData').mockReturnValue(false);
    jest.spyOn(authStudentService, 'compareCriptografied').mockReturnValue(Promise.resolve(true));
    jest.spyOn(authStudentService, 'thirdWordInUpperCase').mockImplementation();
    jest.spyOn(authStudentService, 'generateToken').mockImplementation();

  });
  it('should throw error if profile different student', async () => {
    try {
      const dataStudentFake = {
        dataStudent: {
          tipo_vinculo: 'Professor',
        },
      }
      await authStudentService.execute(dataStudentFake as any)
      expect(true).toBe(false);
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Perfil de usuário inválido');
      expect(error.statusCode).toBe(401);
    }
  })
  it('should create student if student not found', async () => {
    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockResolvedValue(undefined);

    await authStudentService.execute(dataFake);

    expect(fakeStudentsRepository.findBySuapId).toHaveBeenCalledWith(dataFake.dataStudent.id);
    expect(studentService.create).toHaveBeenCalledWith({
      suapId: dataFake.dataStudent.id, password: dataFake.password, birthDate: dataFake.dataStudent.data_nascimento,
      email: dataFake.dataStudent.email, name: dataFake.dataStudent.nome_usual, registration: dataFake.dataStudent.matricula,
      fullName: dataFake.dataStudent.vinculo.nome, gender: dataFake.dataStudent.sexo, situation: dataFake.dataStudent.vinculo.situacao,
      systematicSituation: dataFake.dataStudent.vinculo.situacao_sistemica
    });
    expect(fakeStudentsRepository.update).toHaveBeenCalledTimes(0);
  })
  it('not should create student if student exists', async () => {
    await authStudentService.execute(dataFake);

    expect(fakeStudentsRepository.findBySuapId).toHaveBeenCalledWith(dataFake.dataStudent.id);
    expect(studentService.create).toHaveBeenCalledTimes(0);
    expect(fakeStudentsRepository.update).toHaveBeenCalledTimes(0);
  })
  it('should update student if has change', async () => {
    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockReturnValue({ id: 1, teste: 'testando' } as any);
    jest.spyOn(authStudentService, 'verifyChangeData').mockReturnValue(true);

    await authStudentService.execute(dataFake);

    expect(fakeStudentsRepository.update).toHaveBeenCalledWith(1, { id: 1, teste: 'testando' });
    expect(studentService.create).toHaveBeenCalledTimes(0);
  })
  it('should update student if has change in password', async () => {
    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockReturnValue({ id: 1, teste: 'testando', password: 'password-invalid' } as any);
    jest.spyOn(authStudentService, 'compareCriptografied').mockReturnValue(Promise.resolve(false));
    jest.spyOn(bcryptjs, 'hash').mockReturnValue(Promise.resolve('password-valid') as any);

    await authStudentService.execute(dataFake);

    expect(authStudentService.compareCriptografied).toHaveBeenCalledWith(dataFake.password, 'password-invalid');
    expect(bcryptjs.hash).toHaveBeenCalledWith(dataFake.password, 10);
    expect(fakeStudentsRepository.update).toHaveBeenCalledWith(1, { id: 1, teste: 'testando', password: 'password-valid' });
    expect(studentService.create).toHaveBeenCalledTimes(0);
  })
  it('should generate token if students correct', async () => {
    const student = {
      id: 1,
      name: 'nome',
      email: 'email'
    }

    jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockReturnValue(student as any);
    jest.spyOn(authStudentService, 'thirdWordInUpperCase').mockReturnValue('INFORMATICA' as any);
    jest.spyOn(authStudentService, 'generateToken').mockReturnValue('token-valid' as any);
    process.env.AUTH_SECRET = 'secret';

    const token = await authStudentService.execute(dataFake);

    expect(authStudentService.thirdWordInUpperCase).toHaveBeenCalledWith(dataFake.dataStudent.vinculo.curso);
    expect(authStudentService.generateToken).toHaveBeenCalledWith({
      tokenSuap: dataFake.tokenSuap,
      id: student.id,
      name: student.name,
      profile: ProfileEnum.STUDENT,
      email: student.email,
      course: 'INFORMATICA'
    }, 'secret');
    expect(token?.token).toBe('token-valid');
    expect(studentService.create).toHaveBeenCalledTimes(0);
    expect(fakeStudentsRepository.update).toHaveBeenCalledTimes(0);
  })
  it('should overwrite data if has change dataStudent', () => {
    jest.spyOn(authStudentService, 'verifyChangeData').mockRestore()
    const student = {
      registration: '',
      name: '',
      fullName: '',
      email: '',
      birthDate: '',
      situation: '',
      systematicSituation: '',
      gender: '',
      suapId: 0
    }
    const dataStudentSuap = {
      matricula: 'change matricula',
      nome_usual: 'change nome_usual',
      vinculo: {
        nome: 'change nome',
        situacao: 'change situacao',
        situacao_sistemica: 'change situacao_sistemica',
      },
      email: 'change email',
      data_nascimento: 'change data_nascimento',
      sexo: 'change sexo',
      id: 'change id'
    }

    const hasChange = authStudentService.verifyChangeData(student, dataStudentSuap);

    expect(hasChange).toBe(true);
    expect(student).toEqual({
      registration: 'change matricula',
      name: 'change nome_usual',
      fullName: 'change nome',
      email: 'change email',
      birthDate: 'change data_nascimento',
      situation: 'change situacao',
      gender: 'change sexo',
      suapId: 'change id',
      systematicSituation: 'change situacao_sistemica'
    })
  })
  it('not should overwrite data if not has change dataStudent', () => {
    jest.spyOn(authStudentService, 'verifyChangeData').mockRestore()
    const student = {
      registration: '',
      name: '',
      fullName: '',
      email: '',
      birthDate: '',
      situation: '',
      systematicSituation: '',
      gender: '',
      suapId: 0
    }
    const dataStudentSuap = {
      matricula: '',
      nome_usual: '',
      vinculo: {
        nome: '',
        situacao: '',
        situacao_sistemica: '',
      },
      email: '',
      data_nascimento: '',
      sexo: '',
      id: ''
    }

    const hasChange = authStudentService.verifyChangeData(student, dataStudentSuap);

    expect(hasChange).toBe(false);
    expect(student).toEqual({
      registration: '',
      name: '',
      fullName: '',
      email: '',
      birthDate: '',
      situation: '',
      gender: '',
      suapId: 0,
      systematicSituation: ''
    })
  })
  it('should compare value with hash', async () => {
    jest.spyOn(authStudentService, 'compareCriptografied').mockRestore();
    jest.spyOn(bcryptjs, 'compare').mockReturnValue(Promise.resolve(true) as any);

    const isEqual = await authStudentService.compareCriptografied('value', 'hash')

    expect(isEqual).toBe(true);
    expect(bcryptjs.compare).toHaveBeenCalledWith('value', 'hash');

    jest.spyOn(bcryptjs, 'compare').mockReturnValue(Promise.resolve(false) as any);
    const isEqual2 = await authStudentService.compareCriptografied('value', 'hash');
    expect(isEqual2).toBe(false);
    expect(bcryptjs.compare).toHaveBeenCalledWith('value', 'hash');
  })

  it('should return third word in Upper Case string', () => {
    jest.spyOn(authStudentService, 'thirdWordInUpperCase').mockRestore();
    const value = 'ensino medio informática'

    const result = authStudentService.thirdWordInUpperCase(value);

    expect(result).toBe('INFORMATICA');
  })
  it('should return generate token', () => {
    jest.spyOn(authStudentService, 'generateToken').mockRestore();
    jest.spyOn(jsonwebtoken, 'sign').mockReturnValue('token-valid' as any);

    const payload = {
      teste: ''
    }
    const secret = 'secret';

    const token = authStudentService.generateToken(payload, secret);

    expect(token).toBe('token-valid');
    expect(jsonwebtoken.sign).toHaveBeenCalledWith(payload, secret, {
      expiresIn: '5d'
    });
  })
});

