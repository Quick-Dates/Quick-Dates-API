import { Router } from 'express';
import AuthService from '../services/AuthService';
import SuapService from '../services/SuapService';

const studentsRouter = Router();

studentsRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;
  try {
    const suapService = new SuapService();
    const authService = new AuthService();

    const tokenSuap = await suapService.signin({username, password});
    const dataStudent = await suapService.indexMyData(tokenSuap);
    const token = await authService.execute({tokenSuap: tokenSuap.token, dataStudent, password});

    return response.json(token);
  } catch (error) {
    console.error(error.message);
    return response.status(400).send(error.message)
  }
});

export default studentsRouter;
