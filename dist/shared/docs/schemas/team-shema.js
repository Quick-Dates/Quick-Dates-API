"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamCreateBodySchema = exports.teamSchema = exports.teamsSchema = void 0;
exports.teamsSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/teamSchema'
    }
};
exports.teamSchema = {
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
};
exports.teamCreateBodySchema = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbS1zaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZG9jcy9zY2hlbWFzL3RlYW0tc2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxXQUFXLEdBQUc7SUFDekIsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0NBQ0YsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsUUFBUTtTQUNmO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1NBQ3RCO0tBQ0Y7Q0FDRixDQUFBIn0=