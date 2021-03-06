import { Router } from 'express';
import AuthService from '../services/AuthService';
import SuapService from '../../../shared/services/SuapService';
import { IResponseMyData } from '../../Students/interfaces/IResponse';
import TeacherService from '../services/TeacherService';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import teacher from '../../../shared/middlewares/teacher';
import { container } from 'tsyringe';

const teachersRouter = Router();

teachersRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;
  try {
    const suapService = new SuapService();
    const authService = container.resolve(AuthService);

    const tokenSuap = await suapService.signin({username, password});
    const dataTeacher = await suapService.indexMyData(tokenSuap);
    const token = await authService.execute({tokenSuap: tokenSuap.token, dataTeacher: {...dataTeacher, password} as any});

    return response.json(token);
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

teachersRouter.get('/:id', ensureAuthenticated, teacher, async (request, response) => {
  const { id } = request.params;
  try {
    const teacherService = container.resolve(TeacherService);
    const teacher = await  teacherService.indexById(id);
    return response.json(teacher);
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({message})
  }
});

export default teachersRouter;
