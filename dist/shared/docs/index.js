"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students_path_1 = require("./paths/students-path");
var tasks_path_1 = require("./paths/tasks-path");
var teachers_path_1 = require("./paths/teachers-path");
var student_schema_1 = require("./schemas/student-schema");
var task_schema_1 = require("./schemas/task-schema");
var teacher_schema_1 = require("./schemas/teacher-schema");
exports.default = {
    openapi: '3.0.0',
    info: {
        title: 'Quick Dates API',
        description: 'API para agendamento de atividades avaliativas acadêmicas',
        version: '1.0.0'
    },
    servers: [{
            url: '/'
        }],
    tags: [
        {
            name: 'Tasks',
        },
        {
            name: 'Students',
        },
        {
            name: 'Teachers',
        },
    ],
    paths: {
        '/tasks': tasks_path_1.tasksPath,
        '/tasks/{id}': tasks_path_1.tasksPathWithId,
        '/students/signin': students_path_1.studentsPath,
        '/teachers/signin': teachers_path_1.teachersPath,
    },
    schemas: {
        task: task_schema_1.taskSchema,
        taskParams: task_schema_1.taskParamsSchema,
        tasks: task_schema_1.tasksSchema,
        studentSignin: student_schema_1.studentSigninSchema,
        studentSigninResponse: student_schema_1.studentSigninResponseSchema,
        teacherSignin: teacher_schema_1.teacherSigninSchema,
        teacherSigninResponse: teacher_schema_1.teacherSigninResponseSchema,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBcUQ7QUFDckQsaURBQWdFO0FBQ2hFLHVEQUFxRDtBQUNyRCwyREFBNEY7QUFDNUYscURBQWlGO0FBQ2pGLDJEQUE0RjtBQUM1RixrQkFBZTtJQUNiLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsV0FBVyxFQUFFLDJEQUEyRDtRQUN4RSxPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELE9BQU8sRUFBQyxDQUFFO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO0lBQ0YsSUFBSSxFQUFFO1FBQ0o7WUFDRSxJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7U0FDakI7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxzQkFBUztRQUNuQixhQUFhLEVBQUUsNEJBQWU7UUFDOUIsa0JBQWtCLEVBQUUsNEJBQVk7UUFDaEMsa0JBQWtCLEVBQUUsNEJBQVk7S0FDakM7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsd0JBQVU7UUFDaEIsVUFBVSxFQUFFLDhCQUFnQjtRQUM1QixLQUFLLEVBQUUseUJBQVc7UUFDbEIsYUFBYSxFQUFFLG9DQUFtQjtRQUNsQyxxQkFBcUIsRUFBRSw0Q0FBMkI7UUFDbEQsYUFBYSxFQUFFLG9DQUFtQjtRQUNsQyxxQkFBcUIsRUFBRSw0Q0FBMkI7S0FDbkQ7Q0FDRixDQUFBIn0=