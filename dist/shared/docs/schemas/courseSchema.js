"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseSchema = exports.coursesSchema = void 0;
exports.coursesSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/courseSchema'
    }
};
exports.courseSchema = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlU2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kb2NzL3NjaGVtYXMvY291cnNlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsYUFBYSxHQUFHO0lBQzNCLElBQUksRUFBRSxPQUFPO0lBQ2IsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQjtDQUNGLENBQUE7QUFFWSxRQUFBLFlBQVksR0FBRztJQUMxQixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztTQUN0QjtLQUNGO0NBQ0YsQ0FBQSJ9