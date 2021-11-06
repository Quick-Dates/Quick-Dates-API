import request from 'supertest';
import app from "./../../../app";
import * as typeorm from 'typeorm';
import AuthService from '../services/AuthService';
import AppError from '../../../shared/errors/AppError';
import { Repository } from 'typeorm';
import IStudentRepository from '../interfaces/IStudentRepository';
import StudentService from '../services/StudentService';
import FakeStudentsRepository from './fakes/FakeStudentsRepository';

let fakeStudentsRepository: FakeStudentsRepository;
let studentService: StudentService;
describe('Student', () => {
  beforeEach(() => {
    fakeStudentsRepository = new FakeStudentsRepository();
    studentService = new StudentService();
  });
  describe('Signin', () => {
    it('should throw error if profile different student', async () => {
      try {
        const authStudentService = new AuthService(fakeStudentsRepository, studentService);
        await authStudentService.execute({
          dataStudent: {
            tipo_vinculo: 'qualquer um'
          },
          password: '',
          tokenSuap: ''
        })
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError);
        expect(error.message).toBe('Perfil de usuário inválido');
        expect(error.statusCode).toBe(400);
      }
    })
    it('should create student if student not found', async () => {
      jest.spyOn(studentService, 'create').mockImplementation();
      jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockResolvedValue(undefined);

      const authStudentService = new AuthService(fakeStudentsRepository, studentService);

      jest.spyOn(authStudentService, 'verifyChangeData').mockReturnValue(false);
      jest.spyOn(authStudentService, 'compareCriptografied').mockReturnValue(Promise.resolve(true));

      const dataFake = {
        dataStudent: {
          tipo_vinculo: 'Aluno',
          id: 'id_valido'
        },
        password: '',
        tokenSuap: ''
      }

      await authStudentService.execute(dataFake);



      expect(fakeStudentsRepository.findBySuapId).toHaveBeenCalledWith(dataFake.dataStudent.id);
      expect(studentService.create).toHaveBeenCalledWith({...dataFake.dataStudent, password: dataFake.password});
    })
    it('not should create student if student exists', async () => {
      jest.spyOn(studentService, 'create').mockImplementation();
      jest.spyOn(fakeStudentsRepository, 'findBySuapId').mockResolvedValue({} as any);

      const authStudentService = new AuthService(fakeStudentsRepository, studentService);

      jest.spyOn(authStudentService, 'verifyChangeData').mockReturnValue(false);
      jest.spyOn(authStudentService, 'compareCriptografied').mockReturnValue(Promise.resolve(true));
      jest.spyOn(authStudentService, 'thirdWordInUpperCase').mockImplementation();
      jest.spyOn(authStudentService, 'generateToken').mockImplementation();

      const dataFake = {
        dataStudent: {
          tipo_vinculo: 'Aluno',
          id: 'id_valido'
        },
        password: '',
        tokenSuap: ''
      }

      await authStudentService.execute(dataFake);

      expect(fakeStudentsRepository.findBySuapId).toHaveBeenCalledWith(dataFake.dataStudent.id);
      expect(studentService.create).toHaveBeenCalledTimes(0);
    })
  });
});
