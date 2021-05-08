import { Router } from 'express';
import CreateTaskService from '../services/CreateStudentService'

const studentsRouter = Router();

studentsRouter.get('/', async (request, response) => {
  // TODO
});

studentsRouter.post('/', async (request, response) => {
  const createTaskService = new CreateTaskService();
  const tasks = await createTaskService.execute()
  response.json(tasks)
});

studentsRouter.delete('/:id', async (request, response) => {
  // TODO
});

studentsRouter.post('/import', async (request, response) => {
  // TODO
});

export default studentsRouter;
