import "reflect-metadata"
import AppError from "../../../shared/errors/AppError"
import teacher from "../../../shared/middlewares/teacher"
import NodeMailerService from "../../../shared/services/NodeMailerService"
import FakeStudentsRepository from "../../Students/__tests__/fakes/FakeStudentsRepository"
import { SituationTaskEnum } from "../enuns/SituationTaskEnum"
import StatusTaskService from "../services/StatusTaskService"
import FakeStatusTaskRepository from "./fakes/FakeStatusTaskRepository"
import FakeTaskRepository from "./fakes/FakeTaskRepository"

let fakeStatusTaskRepository: FakeStatusTaskRepository
let fakeStudentRepository: FakeStudentsRepository
let fakeTaskRepository: FakeTaskRepository
let statusTaskService: StatusTaskService
let nodeMailerService: NodeMailerService

describe('StatusTaskService', () => {
  beforeEach(() => {
    fakeStatusTaskRepository = new FakeStatusTaskRepository()
    fakeStudentRepository = new FakeStudentsRepository()
    fakeTaskRepository = new FakeTaskRepository()
    nodeMailerService = new NodeMailerService()
    statusTaskService = new StatusTaskService(
      fakeStatusTaskRepository,
      fakeStudentRepository,
      fakeTaskRepository,
      nodeMailerService
    )
  })

  describe('#create', () => {
    it('should create status task', async () => {
      const fakeParams = { id_student: '54', id_task: 1 }
      const fakeStatusTask = { ...fakeParams, situation: SituationTaskEnum.EM_ANDAMENTO }

      jest.spyOn(fakeStatusTaskRepository, 'create').mockResolvedValue(fakeStatusTask as any)
      const statusTaskCreated = await statusTaskService.create(fakeParams)

      expect(fakeStatusTaskRepository.create).toHaveBeenCalledWith({ ...fakeParams, situation: SituationTaskEnum.EM_ANDAMENTO })
      expect(statusTaskCreated).toEqual(fakeStatusTask)
    })
  })
  describe('#createTasksByStudent', () => {
    it('should create status tasks in one student', async () => {
      const fakeTasks = [{ id: 1, title: 'teste tarefa' }, { id: 2, title: 'teste tarefa 2' }]
      const params = {
        idStudent: '54', tasks: fakeTasks
      }

      jest.spyOn(fakeStatusTaskRepository, 'create').mockResolvedValue(fakeTasks[0] as any)
      jest.spyOn(fakeStatusTaskRepository, 'findByIdStudentAndIdTask').mockResolvedValue(undefined)
      const statusTaskCreated = await statusTaskService.createTasksByStudent(params.idStudent, params.tasks as any)

      expect(fakeStatusTaskRepository.findByIdStudentAndIdTask).toHaveBeenCalledTimes(fakeTasks.length)
      expect(fakeStatusTaskRepository.create).toHaveBeenCalledTimes(fakeTasks.length)
      fakeTasks.forEach((task, index) => {
        expect(fakeStatusTaskRepository.create).toHaveBeenNthCalledWith(index + 1, { id_student: params.idStudent, id_task: task.id, situation: SituationTaskEnum.EM_ANDAMENTO })
        expect(fakeStatusTaskRepository.findByIdStudentAndIdTask).toHaveBeenNthCalledWith(index + 1, params.idStudent, task.id)
      })
      expect(statusTaskCreated).toEqual([fakeTasks[0], fakeTasks[0]])
    })
    it('not should create status tasks if exists', async () => {
      const fakeTasks = [{ id: 1, title: 'teste tarefa' }, { id: 2, title: 'teste tarefa 2' }]
      const params = {
        idStudent: '54', tasks: fakeTasks
      }

      jest.spyOn(fakeStatusTaskRepository, 'create').mockResolvedValue(fakeTasks[0] as any)
      jest.spyOn(fakeStatusTaskRepository, 'findByIdStudentAndIdTask').mockResolvedValue(fakeTasks[0] as any)
      const statusTaskCreated = await statusTaskService.createTasksByStudent(params.idStudent, params.tasks as any)

      expect(fakeStatusTaskRepository.findByIdStudentAndIdTask).toHaveBeenCalledTimes(fakeTasks.length)
      expect(fakeStatusTaskRepository.create).not.toHaveBeenCalled()
      expect(statusTaskCreated).toEqual([fakeTasks[0], fakeTasks[0]])
    })
  })
  describe('#createTaskByStudents', () => {
    it('should create status task in students', async () => {
      const fakeStudents = [{ id: 1, name: 'teste student' }, { id: 2, name: 'teste student 2' }] as any
      const fakeTask = { id: 1, title: 'teste tarefa' } as any
      const fakeTeacher = { id: 1, title: 'teste teacher' } as any

      jest.spyOn(statusTaskService, 'create').mockImplementation()
      jest.useFakeTimers()
      await statusTaskService.createTaskByStudents(fakeStudents, fakeTask, fakeTeacher)

      expect(statusTaskService.create).toHaveBeenCalledTimes(fakeStudents.length)
      fakeStudents.forEach((student: any, index: number) => {
        expect(statusTaskService.create).toHaveBeenNthCalledWith(index + 1, {
          id_student: student.id as string,
          id_task: fakeTask.id
        })
      })
    })
    it('should send email after create status task in student after and 3secs', async () => {
      const fakeStudents = [{ id: 1, name: 'teste student' }, { id: 2, name: 'teste student 2' }] as any
      const fakeTask = { id: 1, title: 'teste tarefa' } as any
      const fakeTeacher = { id: 1, title: 'teste teacher' } as any

      jest.useFakeTimers()
      jest.spyOn(statusTaskService, 'create').mockImplementation()
      jest.spyOn(nodeMailerService, 'sendEmailTaskCreated').mockImplementation()
      await statusTaskService.createTaskByStudents(fakeStudents, fakeTask, fakeTeacher)

      expect(nodeMailerService.sendEmailTaskCreated).not.toHaveBeenCalled()

      jest.advanceTimersByTime(3000)

      expect(nodeMailerService.sendEmailTaskCreated).toHaveBeenCalledTimes(fakeStudents.length)
      fakeStudents.forEach((student: any, index: number) => {
        expect(nodeMailerService.sendEmailTaskCreated).toHaveBeenNthCalledWith(index + 1, student, fakeTeacher, fakeTask)
      })
    })
  })
  describe('#indexTasksByStudent', () => {
    it('should throw error if student not found', async () => {
      try {
        const idStudent = '54'
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(undefined)

        await statusTaskService.indexTasksByStudent(idStudent)

        expect(true).toBe(false)

      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Aluno não encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if task not found', async () => {
      try {
        const idStudent = '54'
        const fakeStatusTasks = [{ id: 1, id_student: '54', id_task: '1' }, { id: 2, id_student: '54', id_task: '1' }]
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
        jest.spyOn(fakeStatusTaskRepository, 'findAllByIdStudent').mockResolvedValue(fakeStatusTasks as any)
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(undefined as any)

        await statusTaskService.indexTasksByStudent(idStudent)

        expect(true).toBe(false)

      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa não encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should update situation to "ATRASADA" if situation equal EM_ANDAMENTO and currentDateTime > finalDateTime', async () => {
      const idStudent = '54';
      const fakeStatusTasks = [
        { id: 1, id_student: '54', id_task: 1, situation: SituationTaskEnum.EM_ANDAMENTO },
        { id: 2, id_student: '54', id_task: '1', situation: SituationTaskEnum.EM_ANDAMENTO },
        { id: 3, id_student: '54', id_task: '1', situation: SituationTaskEnum.CONCLUIDA },
      ]
      const fakeTask = { id: 1, title: 'teste tarefa', finalDate: '2020-01-01', finalTime: '10:00' }
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
      jest.spyOn(fakeStatusTaskRepository, 'findAllByIdStudent').mockResolvedValue(fakeStatusTasks as any)
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'update').mockImplementation()

      jest.useFakeTimers().setSystemTime(new Date(2021, 1, 1).getTime());
      await statusTaskService.indexTasksByStudent(idStudent)

      fakeStatusTasks.forEach((statusTask: any, index) => {
        if(statusTask.situation === SituationTaskEnum.EM_ANDAMENTO) {
          expect(fakeStatusTaskRepository.update).toHaveBeenNthCalledWith(index + 1, statusTask.id, { ...statusTask, situation: SituationTaskEnum.ATRASADA })
        }
      })


    })
    it('should list all tasks by student', async () => {
      const idStudent = '54';
      const fakeStatusTasks = [
        { id: 1, id_student: '54', id_task: 1, situation: SituationTaskEnum.CONCLUIDA },
        { id: 2, id_student: '54', id_task: '1', situation: SituationTaskEnum.CONCLUIDA },
        { id: 3, id_student: '54', id_task: '1', situation: SituationTaskEnum.CONCLUIDA },
      ]
      const fakeTask = { id: 1, title: 'teste tarefa', finalDate: '2020-01-01', finalTime: '10:00' }
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
      jest.spyOn(fakeStatusTaskRepository, 'findAllByIdStudent').mockResolvedValue(fakeStatusTasks as any)
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'update').mockImplementation()

      const tasks = await statusTaskService.indexTasksByStudent(idStudent)

      expect(fakeStudentRepository.findById).toHaveBeenCalledWith(idStudent)
      expect(fakeStatusTaskRepository.findAllByIdStudent).toHaveBeenCalledWith(idStudent)

      fakeStatusTasks.forEach((statusTask: any, index) => {
        expect(fakeTaskRepository.findById).toHaveBeenNthCalledWith(index + 1, statusTask.id_task)
      })
      expect(tasks).toEqual([fakeTask, fakeTask, fakeTask])
    })
  })
  describe('#indexSituation', () => {
    it('should throw error if student not found', async() => {
      try {
        const idTask = 1
        const idStudent = '54'
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue(undefined)
        await statusTaskService.indexSituation(idTask, idStudent )

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Aluno não encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if task not found', async() => {
      try {
        const idTask = 1
        const idStudent = '54'
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(undefined)
        await statusTaskService.indexSituation(idTask, idStudent )

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa não encontrada')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should throw error if statusTask not found', async () => {
      try {
        const idTask = 1
        const idStudent = '54'
        jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
        jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue({} as any)
        jest.spyOn(fakeStatusTaskRepository, 'findByIdStudentAndIdTask').mockResolvedValue(undefined)
        await statusTaskService.indexSituation(idTask, idStudent )

        expect(true).toBe(false)
      } catch (error: any) {
        expect(error).toBeInstanceOf(AppError)
        expect(error.message).toBe('Tarefa do aluno não encontrado')
        expect(error.statusCode).toBe(404)
      }
    })
    it('should update situation to "ATRASADA" if situation equal EM_ANDAMENTO and currentDateTime > finalDateTime', async ()=> {
      const idTask = 1
      const idStudent = '54'
      const fakeTask = { id: 1, title: 'teste tarefa', finalDate: '2020-01-01', finalTime: '10:00' }
      const fakeStatusTask = { id: 1, situation: SituationTaskEnum.EM_ANDAMENTO }
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'findByIdStudentAndIdTask').mockResolvedValue(fakeStatusTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'update').mockImplementation()
      jest.useFakeTimers().setSystemTime(new Date(2021, 1, 1).getTime());

      const situation = await statusTaskService.indexSituation(idTask, idStudent)

      expect(fakeStatusTaskRepository.update).toHaveBeenCalledWith(fakeStatusTask.id, {...fakeStatusTask, situation: SituationTaskEnum.ATRASADA})
      expect(situation).toEqual(SituationTaskEnum.ATRASADA)
    })
    it('shoud return situation by status_task', async() => {
      const idTask = 1
      const idStudent = '54'
      const fakeTask = { id: 1, title: 'teste tarefa', finalDate: '2020-01-01', finalTime: '10:00' }
      const fakeStatusTask = { id: 1, situation: SituationTaskEnum.EM_ANDAMENTO }
      jest.spyOn(fakeStudentRepository, 'findById').mockResolvedValue({} as any)
      jest.spyOn(fakeTaskRepository, 'findById').mockResolvedValue(fakeTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'findByIdStudentAndIdTask').mockResolvedValue(fakeStatusTask as any)
      jest.spyOn(fakeStatusTaskRepository, 'update').mockImplementation()
      jest.useFakeTimers().setSystemTime(new Date(2020, 1, 1).getTime());

      const situation = await statusTaskService.indexSituation(idTask, idStudent)

      expect(situation).toEqual(fakeStatusTask.situation)
    })
  })
  describe('#updateSituation', () => {
    it.todo('should throw error if student not found')
    it.todo('should throw error if task not found')
    it.todo('should throw error if statusTask not found')
    it.todo('should update situation to "CONCLUIDA" if completed')
    it.todo('should update situation to "ATRASADA" if not completed and currentDateTime > finalDateTime')
    it.todo('should update situation to "EM_ANDAMENTO" if not completed and not situation "ATRASADA"')
    it.todo('shoud return status_task')
  })
})
