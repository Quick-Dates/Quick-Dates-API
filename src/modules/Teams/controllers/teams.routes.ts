import { Router } from 'express';
import TeamService from '../services/TeamService';

const teamsRouter = Router();

teamsRouter.put('/student/:id', async (request, response) => {
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

export default teamsRouter;
