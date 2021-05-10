export const tasksPath = {
  get: {
    tags: ['Tasks'],
    summary: 'Listar tarefas',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/tasks'
            }
          }
        }
      }
    }
  },
  post: {
    tags: ['Tasks'],
    summary: 'Criar uma tarefa',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/taskParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/task'
            }
          }
        }
      }
    }
  },
}
export const tasksPathWithId = {
  put: {
    tags: ['Tasks'],
    summary: 'Editar uma tarefa',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da task',
        required: true,
        schema: {
          type: 'integer',
          format: 'int64'
        }
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/task'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/task'
            }
          }
        }
      }
    }
  },
  get: {
    tags: ['Tasks'],
    summary: 'Detalhes de uma tarefa',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da task',
        required: true,
        schema: {
          type: 'integer',
          format: 'int64'
        }
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/task'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/task'
            }
          }
        }
      }
    }
  },
}
