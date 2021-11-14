import "reflect-metadata"
import { container } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import NodeMailerService from "../../../shared/services/NodeMailerService";
import TeamService from "../../Teams/services/TeamService";
import AuthService from "../services/AuthService";
import TeacherService from "../services/TeacherService";
import FakeTeachersRepository from "./fakes/FakeTeachersRepository";
import bcryptjs from "bcryptjs";
import { ProfileEnum } from "../../../shared/enum/ProfileEnum";

let fakeTeacherRepository: FakeTeachersRepository;
let teacherService: TeacherService;
let authTeacherService: AuthService;
let nodeMailerService: NodeMailerService;
let teamService: TeamService;
const dataFake: any = {
  dataTeacher: {
    tipo_vinculo: 'Servidor',
    id: 'id_valido',
    vinculo: {
      categoria: 'docente'
    },
    password: 'password-valid',
  },
  password: 'password-valid',
  tokenSuap: ''
}

describe('AuthService of Teacher', () => {
  beforeEach(() => {
    fakeTeacherRepository = new FakeTeachersRepository();
    nodeMailerService = new NodeMailerService();
    teamService = new TeamService();
    teacherService = new TeacherService(fakeTeacherRepository, nodeMailerService)
    authTeacherService = new AuthService(fakeTeacherRepository);

    jest.spyOn(container, 'resolve').mockReturnValue(teacherService);
    jest.spyOn(teacherService, 'create').mockResolvedValue({} as any);
    jest.spyOn(fakeTeacherRepository, 'update').mockImplementation();
    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockReturnValue({} as any);
    jest.spyOn(authTeacherService, 'verifyChangeData').mockReturnValue(false);
    jest.spyOn(authTeacherService, 'compareCriptografied').mockReturnValue(Promise.resolve(true));
    jest.spyOn(authTeacherService, 'generateToken').mockImplementation();

  });

  it('should throw error if profile different teacher', async() => {
    try {
      const dataFakeTeacher = {
        dataTeacher: {
          tipo_vinculo: 'Aluno',
          vinculo: {
            categoria: 'aluno'
          }
        }
      }
      await authTeacherService.execute(dataFakeTeacher as any);
      expect(true).toBe(false);
    } catch (error: any) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe('Perfil de usuário inválido');
      expect(error.statusCode).toBe(401);
    }
  })
  it('should create teacher if not found', async() => {
    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockResolvedValue(undefined)


    await authTeacherService.execute(dataFake as any);

    expect(teacherService.create).toHaveBeenLastCalledWith(dataFake.dataTeacher);
    expect(container.resolve).toHaveBeenLastCalledWith(TeacherService);
  })
  it('not should create teacher if exists', async() => {
    await authTeacherService.execute(dataFake as any);

    expect(fakeTeacherRepository.findBySuapId).toHaveBeenLastCalledWith(dataFake.dataTeacher.id);
    expect(teacherService.create).not.toHaveBeenCalled();
    expect(fakeTeacherRepository.update).not.toHaveBeenCalled();
  })
  it('should update teacher if has change', async() => {
    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockReturnValue(dataFake.dataTeacher as any);
    jest.spyOn(authTeacherService, 'verifyChangeData').mockReturnValue(true);

    await authTeacherService.execute(dataFake as any);

    expect(fakeTeacherRepository.update).toHaveBeenLastCalledWith(dataFake.dataTeacher.id, dataFake.dataTeacher);
    expect(teacherService.create).not.toHaveBeenCalled();
  })
  it('should update teacher if has change in password', async() => {
    const fakeDataTeacher = {
      password: 'password-invalid',
      id: 'id-valido'
    }
    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockReturnValue(fakeDataTeacher as any);
    jest.spyOn(authTeacherService, 'compareCriptografied').mockReturnValue(Promise.resolve(false));
    jest.spyOn(bcryptjs, 'hash').mockReturnValue(Promise.resolve('password-valid') as any);

    await authTeacherService.execute(dataFake as any);

    expect(authTeacherService.compareCriptografied).toHaveBeenCalledWith(dataFake.password, 'password-invalid');
    expect(bcryptjs.hash).toHaveBeenCalledWith(dataFake.password, 10);
    expect(fakeTeacherRepository.update).toHaveBeenLastCalledWith(fakeDataTeacher.id, {...fakeDataTeacher, password: 'password-valid'});
    expect(teacherService.create).not.toHaveBeenCalled();
  })
  it('should generate token if teacher correct', async () => {
    const teacher = {
      id: 1,
      name: 'nome',
      email: 'email'
    }

    jest.spyOn(fakeTeacherRepository, 'findBySuapId').mockReturnValue(teacher as any);
    jest.spyOn(authTeacherService, 'generateToken').mockReturnValue('token-valid' as any);

    process.env.AUTH_SECRET = 'mysecret';

    const { token }: any = await authTeacherService.execute(dataFake as any);


    expect(authTeacherService.generateToken).toHaveBeenCalledWith({
      tokenSuap: dataFake.tokenSuap,
      id: teacher.id,
      name: teacher.name,
      profile: ProfileEnum.TEACHER,
      email: teacher.email,
    }, 'mysecret');
    expect(token).toBe('token-valid');
    expect(fakeTeacherRepository.update).not.toHaveBeenCalled();
    expect(teacherService.create).not.toHaveBeenCalled();
  })
  it.todo('should overwrite data if has change dataTeacher')
  it.todo('not should overwrite data if not has change dataTeacher')
  it.todo('should compare value with hash')
  it.todo('should return third word in Upper Case string')
  it.todo('should return generate token')
})
