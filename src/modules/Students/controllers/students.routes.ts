import { Router } from 'express';
import AuthService from '../services/AuthService';
import SuapService from '../../../shared/services/SuapService';
import StudentService from '../services/StudentService';
import ensureAuthenticated from '../../../shared/middlewares/ensureAuthenticated';
import student from '../../../shared/middlewares/student';
import { container } from 'tsyringe';

const studentsRouter = Router();

studentsRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;
  try {
    const suapService = new SuapService();
    const authService = container.resolve(AuthService);

    const tokenSuap = await suapService.signin({ username, password });
    const dataStudent = await suapService.indexMyData(tokenSuap);
    const token = await authService.execute({ tokenSuap: tokenSuap.token, dataStudent, password });

    return response.json(token);
  } catch (error: any) {
    const status = error.response && error.response.status || 400;
    const message = error.response && error.response.data.detail || error.message;
    console.error(message);
    return response.status(status).json({ message })
  }
});

studentsRouter.get('/grades', ensureAuthenticated, student, async (request, response) => {
  return response.status(503).json({
    status: 'warn',
    message: 'Essa funcionalidade foi adiada'
  });
});

studentsRouter.get('/ranking', ensureAuthenticated, student, async (request, response) => {
  return response.status(503).json({
    status: 'warn',
    message: 'Essa funcionalidade foi adiada'
  });
});

studentsRouter.get('/:id', ensureAuthenticated, student, async (request, response) => {
  const { id } = request.params;
  const studentService = new StudentService();
  const student = await studentService.indexById(id);
  return response.json(student);
});

export default studentsRouter;
