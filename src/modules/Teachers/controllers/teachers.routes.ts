import { Router } from 'express';
import AuthService from '../services/AuthService';
import SuapService from '../../../shared/services/SuapService';
import { IResponseMyData } from '../../Students/interfaces/IResponse';

const teachersRouter = Router();

teachersRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;
  console.log(username, password);
  try {
    const suapService = new SuapService();
    const authService = new AuthService();

    const tokenSuap = await suapService.signin({username, password});
    const dataTeacher = await suapService.indexMyData(tokenSuap);
    const token = await authService.execute({tokenSuap: tokenSuap.token, dataTeacher: {...dataTeacher, password} as IResponseMyData});

    return response.json(token);
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

export default teachersRouter;
