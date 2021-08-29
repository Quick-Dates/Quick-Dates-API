export const teacherSigninSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  }
}
export const teacherSigninResponseSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
    },
  }
}
