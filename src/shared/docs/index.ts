import { tasksPath, tasksPathWithId } from './paths/tasks-path';
import { taskSchema, taskParamsSchema, tasksSchema } from './schemas/task-schema'
export default {
  openapi: '3.0.0',
  info: {
    title: 'Quick Dates API',
    description: 'API para agendamento de atividades avaliativas acadêmicas',
    version: '1.0.0'
  },
  servers:[ {
    url: '/api'
  }],
  tags: [
    {
      name: 'Tasks'
    }
  ],
  paths: {
    '/tasks': tasksPath,
    '/tasks/{id}': tasksPathWithId,
  },
  schemas: {
    task: taskSchema,
    taskParams: taskParamsSchema,
    tasks: tasksSchema
  }
}
