import "reflect-metadata"
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
    it('should create status tasks in one student', async() => {
      const fakeTasks = [{id: 1, title: 'teste tarefa'}, {id: 2, title: 'teste tarefa 2'} ]
      const params = {
        idStudent: '54', tasks:  fakeTasks
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
    it('not should create status tasks if exists', async() => {
      const fakeTasks = [{id: 1, title: 'teste tarefa'}, {id: 2, title: 'teste tarefa 2'} ]
      const params = {
        idStudent: '54', tasks:  fakeTasks
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
    it('should create status task in students', async() => {
      const fakeStudents = [{id: 1, name: 'teste student'}, {id: 2, name: 'teste student 2'} ] as any
      const fakeTask = {id: 1, title: 'teste tarefa'} as any
      const fakeTeacher = {id: 1, title: 'teste teacher'} as any

      jest.spyOn(statusTaskService,  'create').mockImplementation()
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
      const fakeStudents = [{id: 1, name: 'teste student'}, {id: 2, name: 'teste student 2'} ] as any
      const fakeTask = {id: 1, title: 'teste tarefa'} as any
      const fakeTeacher = {id: 1, title: 'teste teacher'} as any

      jest.useFakeTimers()
      jest.spyOn(statusTaskService,  'create').mockImplementation()
      jest.spyOn(nodeMailerService,  'sendEmailTaskCreated').mockImplementation()
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
    it.todo('should throw error if student not found')
    it.todo('should throw error if task not found')
    it.todo('should update situation to "ATRASADA" if situation equal EM_ANDAMENTO and currentDateTime > finalDateTime')
    it.todo('should list all tasks by student')
  })
  describe('#indexSituation', () => {
    it.todo('should throw error if student not found')
    it.todo('should throw error if task not found')
    it.todo('should throw error if statusTask not found')
    it.todo('should update situation to "ATRASADA" if situation equal EM_ANDAMENTO and currentDateTime > finalDateTime')
    it.todo('shoud return situation by status_task')
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
