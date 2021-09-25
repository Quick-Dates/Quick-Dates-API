export const teachersPath = {
  post: {
    tags: ['Teachers'],
    summary: 'Professor se autenticar no Quick Dates',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/teacherSignin'
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
              $ref: '#/schemas/teacherSigninResponse'
            }
          }
        }
      }
    }
  },
}

export const teachersByIdPath = {
  get: {
    tags: ['Teachers'],
    summary: 'Dados do professor',
    security: [
      {
        bearerAuth: []
      }
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id do professor',
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
              $ref: '#/schemas/teacherGetByIdResponse'
            }
          }
        }
      }
    }
  },
}
