import { Router } from 'express';

import tasksRouter from '../../modules/Tasks/routes/tasks.routes';
import studentsRouter from '../../modules/Students/controllers/students.routes';
import teachersRouter from '../../modules/Teachers/controllers/teachers.routes';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use('/teachers', teachersRouter);
routes.use('/students', studentsRouter);

export default routes;
