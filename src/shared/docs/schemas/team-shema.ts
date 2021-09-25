export const teamsSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/teamSchema'
  }
}

export const teamSchema = {
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

export const teamCreateBodySchema = {
  type: 'object',
  properties: {
    yearCreation: {
      type: 'integer'
    },
    courseName: {
      type: 'string'
    },
    level: {
      type: 'string',
      enum: ['EMI', 'TADS']
    },
  }
}


