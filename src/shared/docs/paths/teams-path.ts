export const teamsByCoursePath = {
  get: {
    tags: ['Teams'],
    summary: 'Listar turmas de um curso',
    parameters: [
      {
        name: 'idCourse',
        in: 'path',
        description: 'id do curso',
        required: true,
        schema: {
          type: 'integer',
        }
      }
    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/teamsSchema'
            }
          }
        }
      }
    }
  },
}

export const teamCoursesPath = {
  get: {
    tags: ['Teams'],
    summary: 'Listar todos os cursos',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/coursesSchema'
            }
          }
        }
      }
    }
  },
}

export const teamsStudentPath = {
  put: {
    tags: ['Teams'],
    summary: 'Incluir um student em uma turma',
    parameters: [
      {
        name: 'idStudent',
        in: 'path',
        description: 'id do aluno',
        required: true,
        schema: {
          type: 'string',
        }
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/teamCreateBody'
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
