import { Router } from 'express';
import AuthService from '../services/AuthService';
import SuapService from '../../../shared/services/SuapService';

const teachersRouter = Router();

teachersRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;
  console.log(username, password);
  try {
    const suapService = new SuapService();
    const authService = new AuthService();

    const tokenSuap = await suapService.signin({username, password});
    console.log(tokenSuap);
    const dataTeacher = await suapService.indexMyData(tokenSuap);
    console.log(dataTeacher);
    const token = await authService.execute({tokenSuap: tokenSuap.token, dataTeacher, password});

    return response.json(token);
  } catch (error) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

export default teachersRouter;
