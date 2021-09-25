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

export const studentGetByIdResponseSchema = {
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
    situation: {
      type: 'string',
    },
    systematicSituation: {
      type: 'string',
    },
    gender: {
      type: 'string',
      enum: ['M', 'F']
    },
    team: {
      type: 'object',
      properties: {
        id: {
          type: 'integer'
        },
        yearCreation: {
          type: 'integer'
        },
        name: {
          type: 'string'
        }
      }
    }
  }
}

export const studentFeatureErrorSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: ['warn', 'error']
    },
    message: {
      type: 'string',
    },
  }
}


