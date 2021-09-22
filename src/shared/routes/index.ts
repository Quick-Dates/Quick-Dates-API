import { Router } from 'express';

import tasksRouter from '../../modules/Tasks/controllers/tasks.routes';
import studentsRouter from '../../modules/Students/controllers/students.routes';
import teachersRouter from '../../modules/Teachers/controllers/teachers.routes';
import teamsRouter from '../../modules/Teams/controllers/teams.routes';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use('/teachers', teachersRouter);
routes.use('/students', studentsRouter);
routes.use('/teams', teamsRouter);

export default routes;
