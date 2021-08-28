import { Router } from 'express';

import tasksRouter from '../../modules/Tasks/routes/tasks.routes';
import studentsRouter from '../../modules/Students/controllers/students.routes';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use('/students', studentsRouter);

export default routes;
