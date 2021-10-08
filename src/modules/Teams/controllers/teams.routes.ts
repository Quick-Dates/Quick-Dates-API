import { Router } from 'express';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import CourseService from '../services/CourseService';
import TeamService from '../services/TeamService';

const teamsRouter = Router();
teamsRouter.use(ensureAuthenticated);

teamsRouter.put('/student/:id', student, async (request, response) => {
  const { id } = request.params;
  const { yearCreation, courseName, level } = request.body;
  const teamService = new TeamService();
  const team = await teamService.addStudentToTeam(id, yearCreation, courseName, level);
  return response.json(team);
});

teamsRouter.get('/courses', teacher, async (request, response) => {
  const courseService = new CourseService();
  const courses = await courseService.index();
  return response.json(courses);
});
teamsRouter.get('/:idCurso', teacher, async (request, response) => {
  const { idCurso } = request.params;
  const teamService = new TeamService();
  const teams = await teamService.getTeamsByCourse(+idCurso);
  return response.json(teams);
});

export default teamsRouter;
