export const studentSigninSchema = {
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
export const studentSigninResponseSchema = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
    },
  }
}
