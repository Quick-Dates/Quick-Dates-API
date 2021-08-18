export const studentsPath = {
  post: {
    tags: ['Students'],
    summary: 'Se autenticar no Quick Dates',
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
