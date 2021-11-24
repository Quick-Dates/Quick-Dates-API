import "reflect-metadata"
import AppError from "../../../shared/errors/AppError"
import FakeStudentsRepository from "../../Students/__tests__/fakes/FakeStudentsRepository"
import FakeTeachersRepository from "../../Teachers/__tests__/fakes/FakeTeachersRepository"
import FakeTeamRepository from "../../Teams/__tests__/fakes/FakeTeamRepository"
import TaskService from "../services/TaskService"
import FakeStatusTaskRepository from "./fakes/FakeStatusTaskRepository"
import FakeTaskRepository from "./fakes/FakeTaskRepository"

let fakeStatusTaskRepository: FakeStatusTaskRepository
let fakeStudentRepository: FakeStudentsRepository
let fakeTeacherRepository: FakeTeachersRepository
let fakeTaskRepository: FakeTaskRepository
let fakeTeamRepository: FakeTeamRepository
let taskService: TaskService
describe('Task Service', () => {
  beforeEach(() => {
    fakeStatusTaskRepository = new FakeStatusTaskRepository()
    fakeStudentRepository = new FakeStudentsRepository()
    fakeTeacherRepository = new FakeTeachersRepository()
    fakeTaskRepository = new FakeTaskRepository()
    fakeTeamRepository = new FakeTeamRepository()
    taskService = new TaskService(
      fakeStatusTaskRepository,
      fakeStudentRepository,
      fakeTeacherRepository,
      fakeTaskRepository,
      fakeTeamRepository
    )
  })
  describe('#create', () => {
    it('should throw error if teacher not found', async() => {
      try {
        const idTeam = 1
        const fakeTask = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor não encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if team not found', async () => {
      try {
        const idTeam = 1
        const fakeTask = {} as any;
        const fakeTeacher = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(undefined)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Turma não encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if score negative', async() => {
      try {
        const idTeam = 1
        const fakeTask = {maximumScore: -1} as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontuação máxima inválida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if score > 10', async() => {
      try {
        const idTeam = 1
        const fakeTask = {maximumScore: 11} as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontuação máxima inválida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if date wrong', async() => {
      try {
        const idTeam = 1
        const fakeTask = {maximumScore: 9} as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        jest.spyOn(taskService, 'validateDates').mockReturnValue(false)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Datas inválidas')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if have there are two tasks in the same day', async() => {
      try {
        const idTeam = 1
        const fakeTask = {maximumScore: 9} as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        jest.spyOn(taskService, 'validateDates').mockReturnValue(true)
        jest.spyOn(taskService, 'indexByFinalDate').mockResolvedValue([{}, {}] as any)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Já existe duas atividades avaliativas para essa data')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if have more than two tasks in the same day', async() => {
      try {
        const idTeam = 1
        const fakeTask = {maximumScore: 9} as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        jest.spyOn(taskService, 'validateDates').mockReturnValue(true)
        jest.spyOn(taskService, 'indexByFinalDate').mockResolvedValue([{}, {}, {}] as any)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Já existe duas atividades avaliativas para essa data')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should create task', async() => {
      const idTeam = 1
      const fakeTask = {maximumScore: 9, id_teacher: '2', startDate: 'sdf', startTime: 'sdd', finalDate: 'gdhfdf',
      finalTime: 'af', description: 'sddsdfsf', title: 'asdhfd'} as any;
      const fakeTeacher = {id: '2'} as any;
      const fakeTeam = {id: 1} as any;
      const fakeTaskCreated = {id: 1} as any;

      jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
      jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
      jest.spyOn(taskService, 'validateDates').mockReturnValue(true)
      jest.spyOn(taskService, 'indexByFinalDate').mockResolvedValue([{}] as any)
      jest.spyOn(fakeTaskRepository, 'create').mockResolvedValue(fakeTaskCreated)

      await taskService.create(idTeam, fakeTask)

      expect(fakeTeacherRepository.findById).toHaveBeenCalledWith(fakeTask.id_teacher)
      expect(fakeTeamRepository.findById).toHaveBeenCalledWith(idTeam)
      expect(taskService.validateDates).toHaveBeenCalledWith(fakeTask.startDate, fakeTask.startTime, fakeTask.finalDate,
        fakeTask.finalTime)
      expect(taskService.indexByFinalDate).toHaveBeenCalledWith(fakeTask.finalDate, idTeam)
      expect(fakeTaskRepository.create).toHaveBeenCalledWith({
        ...fakeTask,
        id_teacher: fakeTeacher.id,
        id_team: fakeTeam.id,
        teacher: fakeTeacher,
      })
    })
  })
  describe('#validateDates', () => {
    it('should return false if finalDateTime < startDateTime', () => {
      const result = taskService.validateDates('2020-01-01', '00:00', '2021-01-01', '00:00')

      expect(result).toBe(false)
    })
    it('should return false if startDateTime < currentDateTime', () => {
      jest.useFakeTimers().setSystemTime(new Date(2021, 1, 1).getTime());

      const result = taskService.validateDates('2020-01-01', '00:00', '2020-01-01', '01:00')

      expect(result).toBe(false)
    })
    it('should return true if everything is correct', () => {
      jest.useFakeTimers().setSystemTime(new Date(2019, 1, 1).getTime());

      const result = taskService.validateDates('2020-01-01', '00:00', '2020-01-01', '01:00')

      expect(result).toBe(true)
    })
  })
  describe('#indexByFinalDate', () => {
    it.todo('should get task by finalDate ')
  })
  describe('#update', () => {
    it.todo('should throw error if task not found')
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if teacher id is incorrect')
    it.todo('should throw error if score wrong')
    it.todo('should update task')
  })
  describe('#delete', () => {
    it.todo('should throw error if task not found')
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if teacher id is incorrect')
    it.todo('should delete task')
  })
  describe('#indexByTeacher', () => {
    it.todo('should throw error if teacher not found')
    it.todo('should get tasks by teacher')
  })
  describe('#indexTasksWeek', () => {
    it.todo('should throw error if team not found')
    it.todo('should return tasks by week with situation')
  })
  describe('#statisticsWeekTasks', () => {
    it.todo('should return statiscs by week')
  })
  describe('#indexByTeam', () => {
    it.todo('should throw error if team not found')
    it.todo('should return tasks by team')
  })
  describe('#indexTasksByStudent', () => {
    it.todo('should throw error if student not found')
    it.todo('should return tasks by student')
  })
  describe('#indexByIdWithStudent', () => {
    it.todo('should throw error if student not found')
    it.todo('should throw error if task not found')
    it.todo('should return task by id with student')
  })
  describe('#indexByIdWithTeacher', () => {
    it.todo('should throw error if teacher not found')
    it.todo('should throw error if task not found')
    it.todo('should throw error if id teacher wrong')
    it.todo('should return task by id with teacher')
  })
})
