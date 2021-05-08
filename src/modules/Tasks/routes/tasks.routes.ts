import { Router } from 'express';
import CreateTaskService from '../services/CreateTaskService'

const tasksRouter = Router();

tasksRouter.get('/', async (request, response) => {
  // TODO
});

tasksRouter.post('/', async (request, response) => {
  const createTaskService = new CreateTaskService();
  const tasks = await createTaskService.execute()
  response.json(tasks)
});

tasksRouter.delete('/:id', async (request, response) => {
  // TODO
});

tasksRouter.post('/import', async (request, response) => {
  // TODO
});

export default tasksRouter;
