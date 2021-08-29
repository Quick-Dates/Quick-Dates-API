"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskParamsSchema = exports.tasksSchema = exports.taskSchema = void 0;
exports.taskSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
        },
        nome: {
            type: 'string',
        },
    }
};
exports.tasksSchema = {
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
};
exports.taskParamsSchema = {
    type: 'object',
    properties: {
        nome: {
            type: 'string',
        },
    },
    required: ['nome']
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3Mvc2NoZW1hcy90YXNrLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN4QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0NBQ0YsQ0FBQTtBQUNZLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLElBQUksRUFBRSxPQUFPO0lBQ2IsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUU7WUFDVixFQUFFLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO0tBQ0Y7Q0FDRixDQUFBO0FBQ1ksUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtJQUNELFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztDQUNuQixDQUFBIn0=