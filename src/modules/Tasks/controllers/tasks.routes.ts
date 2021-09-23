import { Router } from 'express';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import Tasks from '../models/Tasks';
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

tasksRouter.put('/:id', teacher, async (request, response) => {
  const { id } = request.params;
  const id_teacher = request.user.id;
  const { description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title } = request.body;

  const taskService = new TaskService();

  await taskService.update(+id, id_teacher,{
     description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title
  } as Tasks);

  return response.status(204).send();
});

tasksRouter.delete('/:id', teacher, async (request, response) => {
  const { id } = request.params;
  const id_teacher = request.user.id;

  const taskService = new TaskService();

  await taskService.delete(+id, id_teacher);

  return response.status(204).send();
});

tasksRouter.get('/teacher', teacher, async (request, response) => {
 const id_teacher = request.user.id;
 const taskService = new TaskService();

 const tasks = await taskService.indexByTeacher(id_teacher);
 return response.json(tasks);
});

tasksRouter.get('/student', student, async (request, response) => {
 const idStudent = request.user.id;
 const taskService = new TaskService();

 const tasks = await taskService.indexTasksByStudent(idStudent);
 return response.json(tasks);
});

tasksRouter.get('/:id/teacher', teacher, async (request, response) => {
 const id = +request.params.id;
 const idTeacher = request.user.id;
 const taskService = new TaskService();

 const tasks = await taskService.indexByIdWithTeacher(id, idTeacher);
 return response.json(tasks);
});

tasksRouter.get('/:id/student', student, async (request, response) => {
 const id = +request.params.id;
 const idStudent = request.user.id;
 const taskService = new TaskService();

 const tasks = await taskService.indexByIdWithStudent(id, idStudent);
 return response.json(tasks);
});

export default tasksRouter;
