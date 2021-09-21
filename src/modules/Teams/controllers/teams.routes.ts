import { Router } from 'express';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import teacher from '../../../shared/middlewares/teacher';
import TeamService from '../services/TeamService';

const teamsRouter = Router();
teamsRouter.use(ensureAuthenticated);

teamsRouter.put('/student/:id', student, async (request, response) => {
  const { id } = request.params;
  const { yearCreation, courseName, level } = request.body;
  try {
   const teamService = new TeamService();
   await teamService.addStudentToTeam(id, yearCreation, courseName, level);
   return response.status(201).send();
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

teamsRouter.get('/:idCurso', teacher, async (request, response) => {
  const { idCurso } = request.params;
  try {
   const teamService = new TeamService();
   const teams = await teamService.getTeamsByCourse(+idCurso);
   return response.json(teams);
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

export default teamsRouter;
