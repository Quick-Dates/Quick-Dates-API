export const taskSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    subject: {
      type: 'string',
    },
    startDate: {
      type: 'string',
    },
    finalDate: {
      type: 'string',
    },
    startTime: {
      type: 'string',
    },
    finalTime: {
      type: 'string',
    },
    maximumScore: {
      type: 'integer',
    },
  },
}

export const tasksSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/task',
  }
}
export const taskParamsSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    subject: {
      type: 'string',
    },
    startDate: {
      type: 'string',
    },
    finalDate: {
      type: 'string',
    },
    startTime: {
      type: 'string',
    },
    finalTime: {
      type: 'string',
    },
    maximumScore: {
      type: 'integer',
    },
  },
}

export const taskDetailsSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    subject: {
      type: 'string',
    },
    startDate: {
      type: 'string',
    },
    finalDate: {
      type: 'string',
    },
    startTime: {
      type: 'string',
    },
    finalTime: {
      type: 'string',
    },
    maximumScore: {
      type: 'integer',
    },
    situation: {
      type: 'string',
      enum: ['EM_ANDAMENTO', 'CONCLUIDA', 'ATRASADA']
    },
  }
}

export const taskSituationBodySchema = {
  type: 'object',
  properties: {
    completed: {
      type: 'boolean',
    }
  }
}
export const taskResponseStatisticsSchema = {
  type: 'object',
  properties: {
    length: {
      type: 'integer',
    },
    completed: {
      type: 'integer',
    },
    inProgress: {
      type: 'integer',
    },
    successPercentage: {
      type: 'integer',
    },
  }
}
