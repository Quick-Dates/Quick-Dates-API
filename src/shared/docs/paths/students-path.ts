export const studentsPath = {
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
