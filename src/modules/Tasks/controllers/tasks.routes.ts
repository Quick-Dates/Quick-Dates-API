import { Router } from 'express';
import transporter from '../../../shared/config/setup-nodemailer';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import Tasks from '../models/Tasks';
import StatusTaskService from '../services/StatusTaskService';
import TaskService from '../services/TaskService';
import TeamService from '../../Teams/services/TeamService';
import StudentService from '../../Students/services/StudentService';
import { container } from 'tsyringe';

const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated)

tasksRouter.post('/team/:id', teacher, async (request, response) => {
  const { id } = request.params;
  const id_teacher = request.user.id;
  const { description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title } = request.body;

  const taskService = new TaskService();
  const teamService = new TeamService();
  const statusTaskService = new StatusTaskService();


 const {task, teacher} = await taskService.create(+id, {
    id_teacher, description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title
  });

  const studentsByTeam = await teamService.indexStudentsByTeam(+id) ;
  await statusTaskService.createTaskByStudents(studentsByTeam, task, teacher);
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
  const studentService = container.resolve(StudentService);

  const student = await studentService.indexById(idStudent);
  const tasks = await taskService.indexByTeam(student?.team?.id as number);
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

tasksRouter.get('/statistics-week', student, async (request, response) => {
  const idStudent = request.user.id;
  const taskService = new TaskService();
  const studentService = container.resolve(StudentService);

  const student = await studentService.indexById(idStudent);
  const tasks = await taskService.indexTasksWeek(student);
  const statisticsWeekTasks = taskService.statisticsWeekTasks(tasks);
  return response.json(statisticsWeekTasks);
});

export default tasksRouter;
