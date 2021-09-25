"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSituationBodySchema = exports.taskDetailsSchema = exports.taskParamsSchema = exports.tasksSchema = exports.taskSchema = void 0;
exports.taskSchema = {
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
};
exports.tasksSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/task',
    }
};
exports.taskParamsSchema = {
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
};
exports.taskDetailsSchema = {
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
};
exports.taskSituationBodySchema = {
    type: 'object',
    properties: {
        completed: {
            type: 'boolean',
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3Mvc2NoZW1hcy90YXNrLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN4QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUc7SUFDekIsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsZ0JBQWdCLEdBQUc7SUFDOUIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO1NBQ2hEO0tBQ0Y7Q0FDRixDQUFBO0FBRVksUUFBQSx1QkFBdUIsR0FBRztJQUNyQyxJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTO1NBQ2hCO0tBQ0Y7Q0FDRixDQUFBIn0=