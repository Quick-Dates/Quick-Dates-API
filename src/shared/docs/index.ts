import { studentsPath } from './paths/students-path';
import { tasksPath, tasksPathWithId } from './paths/tasks-path';
import { studentSigninResponseSchema, studentSigninSchema } from './schemas/student-schema';
import { taskSchema, taskParamsSchema, tasksSchema } from './schemas/task-schema'
export default {
  openapi: '3.0.0',
  info: {
    title: 'Quick Dates API',
    description: 'API para agendamento de atividades avaliativas acadêmicas',
    version: '1.0.0'
  },
  servers:[ {
    url: '/'
  }],
  tags: [
    {
      name: 'Tasks',
    },
    {
      name: 'Students',
    },
  ],
  paths: {
    '/tasks': tasksPath,
    '/tasks/{id}': tasksPathWithId,
    '/students/signin': studentsPath,
  },
  schemas: {
    task: taskSchema,
    taskParams: taskParamsSchema,
    tasks: tasksSchema,
    studentSignin: studentSigninSchema,
    studentSigninResponse: studentSigninResponseSchema,
  }
}
