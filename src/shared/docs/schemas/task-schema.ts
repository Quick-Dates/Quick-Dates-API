export const taskSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    nome: {
      type: 'string',
    },
  }
}
export const tasksSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      nome: {
        type: 'string',
      },
    }
  }
}
export const taskParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string',
    },
  },
  required: ['nome']
}
