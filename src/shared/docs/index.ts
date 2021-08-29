import { studentsPath } from './paths/students-path';
import { tasksPath, tasksPathWithId } from './paths/tasks-path';
import { teachersPath } from './paths/teachers-path';
import { studentSigninResponseSchema, studentSigninSchema } from './schemas/student-schema';
import { taskSchema, taskParamsSchema, tasksSchema } from './schemas/task-schema'
import { teacherSigninResponseSchema, teacherSigninSchema } from './schemas/teacher-schema';
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
    {
      name: 'Teachers',
    },
  ],
  paths: {
    '/tasks': tasksPath,
    '/tasks/{id}': tasksPathWithId,
    '/students/signin': studentsPath,
    '/teachers/signin': teachersPath,
  },
  schemas: {
    task: taskSchema,
    taskParams: taskParamsSchema,
    tasks: tasksSchema,
    studentSignin: studentSigninSchema,
    studentSigninResponse: studentSigninResponseSchema,
    teacherSignin: teacherSigninSchema,
    teacherSigninResponse: teacherSigninResponseSchema,
  }
}
