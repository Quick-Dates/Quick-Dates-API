export const tasksTeamPath = {
  post: {
    tags: ['Tasks'],
    summary: 'Criar uma tarefa para uma turma',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'idTeam',
        in: 'path',
        description: 'id da turma',
        required: true,
        schema: {
          type: 'integer',
        }
      }
    ],
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
      201: {
        description: 'Sucesso',
      }
    }
  },
}
export const tasksPathWithId = {
  put: {
    tags: ['Tasks'],
    summary: 'Editar uma tarefa pelo id',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da tarefa',
        required: true,
        schema: {
          type: 'integer',
        }
      }
    ],
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
      204: {
        description: 'Sucesso',
      }
    }
  },
  delete: {
    tags: ['Tasks'],
    summary: 'Deletar uma tarefa pelo id',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da tarefa',
        required: true,
        schema: {
          type: 'integer',
        }
      }
    ],
    responses: {
      204: {
        description: 'Sucesso',
      }
    }
  },
}

export const tasksByTeacherPath = {
  get: {
    tags: ['Tasks'],
    summary: 'Listar todas as tarefas que o professor marcou',
    security: [
      {
        bearerAuth: []
      }
    ],
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
}

export const tasksByStudentPath = {
  get: {
    tags: ['Tasks'],
    summary: 'Listar todas as tarefas do aluno',
    security: [
      {
        bearerAuth: []
      }
    ],
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
}
export const tasksStatistics = {
  get: {
    tags: ['Tasks'],
    summary: 'Detalhar estatíscas do desempenho do aluno na semana',
    security: [
      {
        bearerAuth: []
      }
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/taskResponseStatistics'
            }
          }
        }
      }
    }
  },
}

export const tasksByIdByStudentPath = {
  get: {
    tags: ['Tasks'],
    summary: 'Detalhes tarefas do aluno',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da tarefa',
        required: true,
        schema: {
          type: 'string',
        }
      }
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/taskDetail'
            }
          }
        }
      }
    }
  },
}

export const tasksByIdByTeacherPath = {
  get: {
    tags: ['Tasks'],
    summary: 'Detalhes tarefas que o professor marcou',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da tarefa',
        required: true,
        schema: {
          type: 'string',
        }
      }
    ],
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

export const tasksSituationPath = {
  patch: {
    tags: ['Tasks'],
    summary: 'Alterar o estado de uma tarefa',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id da tarefa',
        required: true,
        schema: {
          type: 'integer',
        }
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/taskSituationBody'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso',
      }
    }
  },
}
