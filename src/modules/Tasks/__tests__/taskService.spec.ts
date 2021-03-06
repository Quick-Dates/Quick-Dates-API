import "reflect-metadata"
import { container } from "tsyringe"
import { teamCoursesPath } from "../../../shared/docs/paths/teams-path"
import AppError from "../../../shared/errors/AppError"
import teacher from "../../../shared/middlewares/teacher"
import NodeMailerService from "../../../shared/services/NodeMailerService"
import FakeStudentsRepository from "../../Students/__tests__/fakes/FakeStudentsRepository"
import FakeTeachersRepository from "../../Teachers/__tests__/fakes/FakeTeachersRepository"
import FakeTeamRepository from "../../Teams/__tests__/fakes/FakeTeamRepository"
import { SituationTaskEnum } from "../enuns/SituationTaskEnum"
import StatusTaskService from "../services/StatusTaskService"
import TaskService from "../services/TaskService"
import FakeStatusTaskRepository from "./fakes/FakeStatusTaskRepository"
import FakeTaskRepository from "./fakes/FakeTaskRepository"

let fakeStatusTaskRepository: FakeStatusTaskRepository
let fakeStudentRepository: FakeStudentsRepository
let fakeTeacherRepository: FakeTeachersRepository
let fakeTaskRepository: FakeTaskRepository
let fakeTeamRepository: FakeTeamRepository
let taskService: TaskService
let statusTaskService: StatusTaskService
let nodeMailerService: NodeMailerService

describe('Task Service', () => {
  beforeEach(() => {
    fakeStatusTaskRepository = new FakeStatusTaskRepository()
    fakeStudentRepository = new FakeStudentsRepository()
    fakeTeacherRepository = new FakeTeachersRepository()
    fakeTaskRepository = new FakeTaskRepository()
    fakeTeamRepository = new FakeTeamRepository()
    nodeMailerService = new NodeMailerService()
    taskService = new TaskService(
      fakeStatusTaskRepository,
      fakeStudentRepository,
      fakeTeacherRepository,
      fakeTaskRepository,
      fakeTeamRepository
    )
    statusTaskService = new StatusTaskService(
      fakeStatusTaskRepository,
      fakeStudentRepository,
      fakeTaskRepository,
      nodeMailerService
    )
  })
  describe('#create', () => {
    it('should throw error if teacher not found', async () => {
      try {
        const idTeam = 1
        const fakeTask = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor n??o encontrado')
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
        expect(error.message).toBe('Turma n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if score negative', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: -1 } as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if score = 0', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: 0 } as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if score > 10', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: 11 } as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if date wrong', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: 9 } as any;
        const fakeTeacher = {} as any;
        const fakeTeam = {} as any;

        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
        jest.spyOn(taskService, 'validateDates').mockReturnValue(false)
        await taskService.create(idTeam, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Datas inv??lidas')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if have there are two tasks in the same day', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: 9 } as any;
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
        expect(error.message).toBe('J?? existe duas atividades avaliativas para essa data')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if have more than two tasks in the same day', async () => {
      try {
        const idTeam = 1
        const fakeTask = { maximumScore: 9 } as any;
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
        expect(error.message).toBe('J?? existe duas atividades avaliativas para essa data')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should create task', async () => {
      const idTeam = 1
      const fakeTask = {
        maximumScore: 9, id_teacher: '2', startDate: 'sdf', startTime: 'sdd', finalDate: 'gdhfdf',
        finalTime: 'af', description: 'sddsdfsf', title: 'asdhfd'
      } as any;
      const fakeTeacher = { id: '2' } as any;
      const fakeTeam = { id: 1 } as any;
      const fakeTaskCreated = { id: 1 } as any;

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
      jest.useFakeTimers().setSystemTime(new Date(2019, 1, 1).getTime());
      const result = taskService.validateDates('2021-01-01', '00:00', '2020-01-01', '00:00')

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
    it('should get task by finalDate', async () => {
      const finalDate = '2020-01-01'
      const idTeam = 1
      const fakeTasks = [{ id: 1 }] as any
      jest.spyOn(fakeTaskRepository, 'findAllByFinalDateAndIdTeam').mockResolvedValue(fakeTasks)
      const tasks = await taskService.indexByFinalDate(finalDate, idTeam)

      expect(fakeTaskRepository.findAllByFinalDateAndIdTeam).toHaveBeenCalledWith(finalDate, idTeam)
      expect(tasks).toEqual(fakeTasks)
    })
  })
  describe('#update', () => {
    it('should throw error if task not found', async () => {
      try {
        const idTeacher = '2'
        const fakeTask = { id: 1 } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(undefined)
        await taskService.update(fakeTask.id, idTeacher, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if teacher not found', async () => {
      try {
        const idTeacher = '2'
        const fakeTask = { id: 1 } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.update(fakeTask.id, idTeacher, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if teacher id is incorrect', async () => {
      try {
        const fakeTacher = { id: '2', name: 'sf' } as any;
        const fakeTask = { id: 1, id_teacher: '3' } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTacher)
        await taskService.update(fakeTask.id, fakeTacher.id, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Voc?? n??o tem permiss??o para alterar essa tarefa')
        expect(error.statusCode).toBe(401)
      }
    })
    it('should throw error if score negative', async () => {
      try {
        const fakeTacher = { id: '2', name: 'sf' } as any;
        const fakeTask = { id: 1, id_teacher: '2', maximumScore: -2 } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTacher)
        await taskService.update(fakeTask.id, fakeTacher.id, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if score = 0', async () => {
      try {
        const fakeTacher = { id: '2', name: 'sf' } as any;
        const fakeTask = { id: 1, id_teacher: '2', maximumScore: 0 } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTacher)
        await taskService.update(fakeTask.id, fakeTacher.id, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should throw error if score > 10', async () => {
      try {
        const fakeTacher = { id: '2', name: 'sf' } as any;
        const fakeTask = { id: 1, id_teacher: '2', maximumScore: 12 } as any;

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTacher)
        await taskService.update(fakeTask.id, fakeTacher.id, fakeTask)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Pontua????o m??xima inv??lida')
        expect(error.statusCode).toBe(400)
      }
    })
    it('should update task', async () => {
      const fakeTeacher = { id: '2', name: 'sf' } as any;
      const fakeTask = { id: 1, id_teacher: '2', maximumScore: 10 } as any;

      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
      jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
      jest.spyOn(fakeTaskRepository, 'update').mockImplementation()
      const task = await taskService.update(fakeTask.id, fakeTeacher.id, fakeTask)

      expect(fakeTaskRepository.findById).toHaveBeenCalledWith(fakeTask.id)
      expect(fakeTeacherRepository.findById).toHaveBeenCalledWith(fakeTeacher.id)
      expect(fakeTaskRepository.update).toHaveBeenCalledWith(fakeTask.id, fakeTask)
      expect(task).toEqual(fakeTask)
    })
  })
  describe('#delete', () => {
    it('should throw error if task not found', async () => {
      try {
        const idTask = 2
        const idTeacher = '1'

        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(undefined)
        await taskService.delete(idTask, idTeacher)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if teacher not found', async () => {
      try {
        const idTask = 2
        const fakeTeacher = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.delete(idTask, fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if teacher id is incorrect', async () => {
      try {
        const fakeTask = { id: 10, id_teacher: '2' } as any
        const fakeTeacher = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        await taskService.delete(fakeTask.id, fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Voc?? n??o tem permiss??o para deletar essa tarefa')
        expect(error.statusCode).toBe(401)
      }
    })
    it('should delete task', async () => {
      const fakeTask = { id: 10, id_teacher: '1' } as any
      const fakeTeacher = { id: '1', name: 'opa' } as any
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
      jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
      jest.spyOn(fakeTaskRepository, 'delete').mockImplementation()
      await taskService.delete(fakeTask.id, fakeTeacher.id)

      expect(fakeTaskRepository.findById).toHaveBeenCalledWith(fakeTask.id)
      expect(fakeTeacherRepository.findById).toHaveBeenCalledWith(fakeTeacher.id)
      expect(fakeTaskRepository.delete).toHaveBeenCalledWith(fakeTask.id)
    })
  })
  describe('#indexByTeacher', () => {
    it('should throw error if teacher not found', async () => {
      try {
        const fakeTeacher = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexByTeacher(fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should get tasks by teacher', async () => {
      const fakeTeacher = { id: '1', name: 'opa' } as any
      const fakeTasks = [{ id: 2, title: 'sd' }] as any
      jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
      jest.spyOn(fakeTaskRepository, 'findAllByTeacher').mockResolvedValue(fakeTasks)

      const tasks = await taskService.indexByTeacher(fakeTeacher.id)

      expect(tasks).toEqual(fakeTasks)
      expect(fakeTaskRepository.findAllByTeacher).toHaveBeenCalledWith(fakeTeacher.id)
      expect(fakeTeacherRepository.findById).toHaveBeenCalledWith(fakeTeacher.id)
    })
  })
  describe('#indexTasksWeek', () => {
    it('should throw error if team not found', async () => {
      try {
        const fakeTeam = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexTasksWeek(fakeTeam.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Turma n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should return tasks by week with situation', async () => {
      const fakeTeam = { id: 2, name: 'opa' } as any
      const fakeStudent = { id: '1', name: 'opa', team: fakeTeam } as any
      const fakeTasks = [{ id: 2, title: 'sd', statusTasks: [{ id_student: fakeStudent.id, situation: 'EM_ANDAMENTO' }] }] as any

      const fakeDateNow = new Date(2021, 1, 1)
      jest.useFakeTimers().setSystemTime(fakeDateNow.getTime())

      const fakeDateFinal = new Date(new Date().setDate(new Date().getDate() + 7))
      jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
      jest.spyOn(fakeTaskRepository, 'findAllTaskByWeek').mockResolvedValue(fakeTasks)

      const tasks = await taskService.indexTasksWeek(fakeStudent)

      expect(fakeTaskRepository.findAllTaskByWeek).toHaveBeenCalledWith(fakeTeam.id,
        fakeDateNow.toLocaleDateString(), fakeDateFinal.toLocaleDateString())
      expect(tasks).toEqual([{ ...fakeTasks[0], situation: 'EM_ANDAMENTO' }])
      expect(fakeTeamRepository.findById).toHaveBeenCalledWith(fakeStudent.team.id)
    })
  })
  describe('#statisticsWeekTasks', () => {
    it('should return statiscs by week', () => {
      const fakeTasks = [
        { id: 2, title: 'sd', situation: SituationTaskEnum.CONCLUIDA },
        { id: 2, title: 'sd', situation: SituationTaskEnum.EM_ANDAMENTO },
        { id: 2, title: 'sd', situation: SituationTaskEnum.ATRASADA },
      ] as any

      const statistics = taskService.statisticsWeekTasks(fakeTasks)

      expect(statistics).toEqual({
        length: fakeTasks.length,
        completed: 1,
        inProgress: 1,
        successPercentage: (1 / fakeTasks.length) * 100
      })
    })
  })
  describe('#indexByTeam', () => {
    it('should throw error if team not found', async () => {
      try {
        const fakeTeam = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexByTeam(fakeTeam.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Turma n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should return tasks by team', async () => {
      const fakeTeam = { id: '1', name: 'opa' } as any
      const fakeTasks = [{ id: '1', name: 'opa' }] as any

      jest.spyOn(fakeTeamRepository, 'findById').mockResolvedValue(fakeTeam)
      jest.spyOn(fakeTaskRepository, 'findAllByTeam').mockResolvedValue(fakeTasks)
      const tasks = await taskService.indexByTeam(fakeTeam.id)

      expect(tasks).toEqual(fakeTasks)
      expect(fakeTaskRepository.findAllByTeam).toHaveBeenCalledWith(fakeTeam.id)
      expect(fakeTeamRepository.findById).toHaveBeenCalledWith(fakeTeam.id)

    })
  })
  describe('#indexTasksByStudent', () => {
    it('should throw error if student not found', async () => {
      try {
        const fakeStudent = { id: '1', name: 'opa' } as any
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexTasksByStudent(fakeStudent.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Aluno n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should return tasks by student', async () => {
      const fakeStudent = { id: '1', name: 'opa' } as any
      const fakeTasks = [{ id: '1', name: 'opa' }] as any
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(fakeStudent)
      jest.spyOn(container, 'resolve').mockReturnValue(statusTaskService)
      jest.spyOn(statusTaskService, 'indexTasksByStudent').mockResolvedValue(fakeTasks)

      const tasks = await taskService.indexTasksByStudent(fakeStudent.id)

      expect(tasks).toEqual(fakeTasks)
      expect(statusTaskService.indexTasksByStudent).toHaveBeenCalledWith(fakeStudent.id)
      expect(container.resolve).toHaveBeenCalledWith(StatusTaskService)
      expect(fakeStudentRepository.findById).toHaveBeenCalledWith(fakeStudent.id)
    })
  })
  describe('#indexByIdWithStudent', () => {
    it('should throw error if student not found', async () => {
      try {
        const fakeStudent = { id: '1', name: 'opa' } as any
        const fakeTask = { id: 1, name: 'op' } as any
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexByIdWithStudent(fakeTask.id, fakeStudent.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Aluno n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if task not found', async () => {
      try {
        const fakeStudent = { id: '1', name: 'opa' } as any
        const fakeTask = { id: 1, name: 'op' } as any
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(fakeStudent)
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexByIdWithStudent(fakeTask.id, fakeStudent.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should return task by id with student', async () => {
      const fakeStudent = { id: '1', name: 'opa' } as any
      const fakeTask = { id: 1, name: 'op' } as any
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(fakeStudent)
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask)
      jest.spyOn(container, 'resolve').mockReturnValue(statusTaskService)
      jest.spyOn(statusTaskService, 'indexSituation').mockResolvedValue(SituationTaskEnum.CONCLUIDA as any)
      const task = await taskService.indexByIdWithStudent(fakeTask.id, fakeStudent.id)

      expect(task).toEqual({ ...fakeTask, situation: SituationTaskEnum.CONCLUIDA })
      expect(fakeTaskRepository.findById).toHaveBeenCalledWith(fakeTask.id)
      expect(fakeStudentRepository.findById).toHaveBeenCalledWith(fakeStudent.id)
      expect(container.resolve).toHaveBeenCalledWith(StatusTaskService)
    })
  })
  describe('#indexByIdWithTeacher', () => {
    it('should throw error if teacher not found', async () => {
      try {
        const fakeTeacher = { id: '1', name: 'opa' } as any
        const fakeTask = { id: 1, name: 'op' } as any
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(undefined)
        await taskService.indexByIdWithTeacher(fakeTask.id, fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Professor n??o encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if task not found', async () => {
      try {
        const fakeTeacher = { id: '1', name: 'opa' } as any
        const fakeTask = { id: 1, name: 'op' } as any
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTaskRepository, 'findByIdAndIdTeacher').mockResolvedValue(undefined)
        await taskService.indexByIdWithTeacher(fakeTask.id, fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa n??o encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if id teacher wrong', async () => {
      try {
        const fakeTeacher = { id: '1', name: 'opa' } as any
        const fakeTask = { id: 1, name: 'op', id_teacher: '2' } as any
        jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
        jest.spyOn(fakeTaskRepository, 'findByIdAndIdTeacher').mockResolvedValue(fakeTask)

        await taskService.indexByIdWithTeacher(fakeTask.id, fakeTeacher.id)

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Voc?? n??o tem permiss??o para visualizar essa tarefa')
        expect(error.statusCode).toBe(401)
      }
    })
    it('should return task by id with teacher', async () => {
      const fakeTeacher = { id: '1', name: 'opa' } as any
      const fakeTask = { id: 1, name: 'op', id_teacher: '1', team: {yearCreation: 2020} } as any
      const fakeYearCurrent = 2021
      jest.spyOn(fakeTeacherRepository, 'findById').mockResolvedValue(fakeTeacher)
      jest.spyOn(fakeTaskRepository, 'findByIdAndIdTeacher').mockResolvedValue(fakeTask)
      jest.useFakeTimers().setSystemTime(new Date(fakeYearCurrent, 1, 1).getTime());

      const task = await taskService.indexByIdWithTeacher(fakeTask.id, fakeTeacher.id)

      expect(task).toEqual({...fakeTask, team: {...fakeTask.team,
        name: `${(fakeYearCurrent - fakeTask.team.yearCreation) + 1}?? ano`}})
      expect(fakeTaskRepository.findByIdAndIdTeacher).toHaveBeenCalledWith(fakeTask.id, fakeTeacher.id)
      expect(fakeTeacherRepository.findById).toHaveBeenCalledWith(fakeTeacher.id)
    })
  })
})
