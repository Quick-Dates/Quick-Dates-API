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
