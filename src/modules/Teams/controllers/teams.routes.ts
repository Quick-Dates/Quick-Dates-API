import { Router } from 'express';
import { container } from 'tsyringe';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import StatusTaskService from '../../Tasks/services/StatusTaskService';
import TaskService from '../../Tasks/services/TaskService';
import CourseService from '../services/CourseService';
import TeamService from '../services/TeamService';

const teamsRouter = Router();
teamsRouter.use(ensureAuthenticated);

teamsRouter.put('/student/:id', student, async (request, response) => {
  const { id } = request.params;
  const { yearCreation, courseName, level } = request.body;
  const teamService = container.resolve(TeamService);
  const taskService = new TaskService();
  const statusTaskService = new StatusTaskService();
  const team = await teamService.addStudentToTeam(id, yearCreation, courseName, level);
  setTimeout(async () => {
    const tasks = await taskService.indexByTeam(team.id as number);
    await statusTaskService.createTasks(id, tasks);
  }, 1000);
  return response.json(team);
});

teamsRouter.get('/courses', teacher, async (request, response) => {
  const courseService = container.resolve(CourseService);
  const courses = await courseService.index();
  return response.json(courses);
});
teamsRouter.get('/:idCurso', teacher, async (request, response) => {
  const { idCurso } = request.params;
  const teamService = container.resolve(TeamService);
  const teams = await teamService.getTeamsByCourse(+idCurso);
  return response.json(teams);
});

export default teamsRouter;
