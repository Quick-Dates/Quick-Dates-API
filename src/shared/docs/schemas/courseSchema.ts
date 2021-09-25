export const coursesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/courseSchema'
  }
}

export const courseSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    name: {
      type: 'string'
    },
    level: {
      type: 'string',
      enum: ['EMI', 'TADS']
    },
  }
}
