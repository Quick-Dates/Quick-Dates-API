import { Router } from 'express';
import transporter from '../../../shared/config/setup-nodemailer';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import Tasks from '../models/Tasks';
import StatusTaskService from '../services/StatusTaskService';
import TaskService from '../services/TaskService';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';

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

  await taskService.update(+id, id_teacher, {
    description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title
  } as Tasks);

  return response.status(204).send();
});

tasksRouter.patch('/:id/situation', student, async (request, response) => {
  const { id } = request.params;
  const id_student = request.user.id;
  const { completed } = request.body;

  const statusTaskService = new StatusTaskService();

  await statusTaskService.updateSituation(+id, id_student, completed);

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

tasksRouter.post('/email', student, async (request, response) => {
  const message = request.body.message;
  console.log(process.env.EMAIL);
  console.log(request.user.email);
 await transporter.sendMail({
    from: `Quick Dates <${process.env.EMAIL}>`,
    to: `${request.user.email}`,
    subject: 'Quick Dates - Tarefa',
    text: message,
    html: `<h1>${message}</h1>`
  })
  return response.json({ message });
});

tasksRouter.post('/email', student, async (request, response) => {
  const message = request.body.message;
  await transporter.sendMail({
    from: `Quick Dates <${process.env.EMAIL}>`,
    to: `${request.user.email}`,
    subject: 'Quick Dates - Tarefa',
    text: request.user.name,
    html: htmlToSend(`Seja bem vindo ${request.user.name} ao Quick Dates`, message)
  })
  return response.json({ message });
});

function htmlToSend(header: string, content: string) {
  const filePath = path.join(__dirname, '../../../views/template/email.html');
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    header,
    content
  };
  return template(replacements);
}


export default tasksRouter;
