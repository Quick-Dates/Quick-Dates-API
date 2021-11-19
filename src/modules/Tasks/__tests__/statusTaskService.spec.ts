import "reflect-metadata"
import FakeStudentsRepository from "../../Students/__tests__/fakes/FakeStudentsRepository"
import { SituationTaskEnum } from "../enuns/SituationTaskEnum"
import StatusTaskService from "../services/StatusTaskService"
import FakeStatusTaskRepository from "./fakes/FakeStatusTaskRepository"
import FakeTaskRepository from "./fakes/FakeTaskRepository"

let fakeStatusTaskRepository: FakeStatusTaskRepository
let fakeStudentRepository: FakeStudentsRepository
let fakeTaskRepository: FakeTaskRepository
let statusTaskService: StatusTaskService

describe('StatusTaskService', () => {
  beforeEach(() => {
    fakeStatusTaskRepository = new FakeStatusTaskRepository()
    fakeStudentRepository = new FakeStudentsRepository()
    fakeTaskRepository = new FakeTaskRepository()
    statusTaskService = new StatusTaskService(
      fakeStatusTaskRepository,
      fakeStudentRepository,
      fakeTaskRepository
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
    it.todo('should create status tasks in one student')
  })
  describe('#createTaskByStudents', () => {
    it.todo('should create status task in students')
    it.todo('should send email after create status task in student after and 3secs')
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
