import { Router } from 'express';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import teacher from '../../../shared/middlewares/teacher';
import TaskService from '../services/TaskService';

const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated)

tasksRouter.post('/team/:id', teacher, async (request, response) => {
  const { id } = request.params;
  const id_teacher = request.user.id;
  const { description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title } = request.body;

  const taskService = new TaskService();

  await taskService.create(+id, {
    id_teacher, description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title
  });

  return response.status(201).send();
});

tasksRouter.get('/', async (request, response) => {
  // TODO
});

tasksRouter.delete('/:id', async (request, response) => {
  // TODO
});

tasksRouter.put('/', async (request, response) => {
  // TODO
});

export default tasksRouter;
