export const studentsPathSignin = {
  post: {
    tags: ['Students'],
    summary: 'Aluno se autenticar no Quick Dates',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/studentSignin'
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
              $ref: '#/schemas/studentSigninResponse'
            }
          }
        }
      }
    }
  },
}

export const studentPathWithId =  {
  get: {
    tags: ['Students'],
    summary: 'Dados do aluno pelo id',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id do aluno',
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
              $ref: '#/schemas/studentGetByIdResponse'
            }
          }
        }
      }
    }
  },
}

export const studentRankingPath =  {
  get: {
    tags: ['Students'],
    summary: 'Ranking de alunos de uma turma',
    responses: {
      503: {
        description: 'Warn',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/studentFeatureError'
            }
          }
        }
      }
    }
  },
}

export const studentGradesPath =  {
  get: {
    tags: ['Students'],
    summary: 'Notas de um aluno',
    responses: {
      503: {
        description: 'Warn',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/studentFeatureError'
            }
          }
        }
      }
    }
  },
}


