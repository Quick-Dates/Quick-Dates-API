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

export const teacherGetByIdResponseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    registration: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    fullName: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    birthDate: {
      type: 'string',
    },
    gender: {
      type: 'string',
      enum: ['M', 'F']
    }
  }
}
