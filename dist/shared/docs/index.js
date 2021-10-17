"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students_path_1 = require("./paths/students-path");
var tasks_path_1 = require("./paths/tasks-path");
var teachers_path_1 = require("./paths/teachers-path");
var teams_path_1 = require("./paths/teams-path");
var courseSchema_1 = require("./schemas/courseSchema");
var student_schema_1 = require("./schemas/student-schema");
var task_schema_1 = require("./schemas/task-schema");
var teacher_schema_1 = require("./schemas/teacher-schema");
var team_shema_1 = require("./schemas/team-shema");
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
        {
            name: 'Teams',
        },
    ],
    paths: {
        '/tasks/student': tasks_path_1.tasksByStudentPath,
        '/tasks/student/statistics-week': tasks_path_1.tasksStatistics,
        '/tasks/teacher': tasks_path_1.tasksByTeacherPath,
        '/tasks/{id}': tasks_path_1.tasksPathWithId,
        '/tasks/{id}/situation': tasks_path_1.tasksSituationPath,
        '/tasks/{id}/student': tasks_path_1.tasksByIdByStudentPath,
        '/tasks/{id}/teacher': tasks_path_1.tasksByIdByTeacherPath,
        '/tasks/team/{idTeam}': tasks_path_1.tasksTeamPath,
        '/students/signin': students_path_1.studentsPathSignin,
        '/students/{id}': students_path_1.studentPathWithId,
        '/students/ranking': students_path_1.studentRankingPath,
        '/students/grades': students_path_1.studentGradesPath,
        '/teachers/signin': teachers_path_1.teachersPath,
        '/teachers/{id}': teachers_path_1.teachersByIdPath,
        '/teams/{idCourse}': teams_path_1.teamsByCoursePath,
        '/teams/courses': teams_path_1.teamCoursesPath,
        '/teams/student/{idStudent}': teams_path_1.teamsStudentPath,
    },
    schemas: {
        task: task_schema_1.taskSchema,
        taskParams: task_schema_1.taskParamsSchema,
        tasks: task_schema_1.tasksSchema,
        taskDetail: task_schema_1.taskDetailsSchema,
        taskSituationBody: task_schema_1.taskSituationBodySchema,
        studentSignin: student_schema_1.studentSigninSchema,
        studentSigninResponse: student_schema_1.studentSigninResponseSchema,
        studentGetByIdResponse: student_schema_1.studentGetByIdResponseSchema,
        studentFeatureError: student_schema_1.studentFeatureErrorSchema,
        teacherSignin: teacher_schema_1.teacherSigninSchema,
        teacherSigninResponse: teacher_schema_1.teacherSigninResponseSchema,
        teacherGetByIdResponse: teacher_schema_1.teacherGetByIdResponseSchema,
        teamSchema: team_shema_1.teamSchema,
        teamsSchema: team_shema_1.teamsSchema,
        courseSchema: courseSchema_1.courseSchema,
        coursesSchema: courseSchema_1.coursesSchema,
        teamCreateBody: team_shema_1.teamCreateBodySchema,
        taskResponseStatistics: task_schema_1.taskResponseStatisticsSchema
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2RvY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBcUg7QUFDckgsaURBQWlNO0FBQ2pNLHVEQUF1RTtBQUN2RSxpREFBMEY7QUFDMUYsdURBQXFFO0FBQ3JFLDJEQUFxSjtBQUNySixxREFBMko7QUFDM0osMkRBQTBIO0FBQzFILG1EQUFxRjtBQUNyRixrQkFBZTtJQUNiLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsV0FBVyxFQUFFLDJEQUEyRDtRQUN4RSxPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELE9BQU8sRUFBQyxDQUFFO1lBQ1IsR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO0lBQ0YsSUFBSSxFQUFFO1FBQ0o7WUFDRSxJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsVUFBVTtTQUNqQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7U0FDakI7UUFDRDtZQUNFLElBQUksRUFBRSxPQUFPO1NBQ2Q7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLGdCQUFnQixFQUFFLCtCQUFrQjtRQUNwQyxnQ0FBZ0MsRUFBRSw0QkFBZTtRQUNqRCxnQkFBZ0IsRUFBRSwrQkFBa0I7UUFDcEMsYUFBYSxFQUFFLDRCQUFlO1FBQzlCLHVCQUF1QixFQUFFLCtCQUFrQjtRQUMzQyxxQkFBcUIsRUFBRSxtQ0FBc0I7UUFDN0MscUJBQXFCLEVBQUUsbUNBQXNCO1FBQzdDLHNCQUFzQixFQUFFLDBCQUFhO1FBQ3JDLGtCQUFrQixFQUFFLGtDQUFrQjtRQUN0QyxnQkFBZ0IsRUFBRSxpQ0FBaUI7UUFDbkMsbUJBQW1CLEVBQUUsa0NBQWtCO1FBQ3ZDLGtCQUFrQixFQUFFLGlDQUFpQjtRQUNyQyxrQkFBa0IsRUFBRSw0QkFBWTtRQUNoQyxnQkFBZ0IsRUFBRSxnQ0FBZ0I7UUFDbEMsbUJBQW1CLEVBQUUsOEJBQWlCO1FBQ3RDLGdCQUFnQixFQUFFLDRCQUFlO1FBQ2pDLDRCQUE0QixFQUFFLDZCQUFnQjtLQUMvQztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSx3QkFBVTtRQUNoQixVQUFVLEVBQUUsOEJBQWdCO1FBQzVCLEtBQUssRUFBRSx5QkFBVztRQUNsQixVQUFVLEVBQUUsK0JBQWlCO1FBQzdCLGlCQUFpQixFQUFFLHFDQUF1QjtRQUMxQyxhQUFhLEVBQUUsb0NBQW1CO1FBQ2xDLHFCQUFxQixFQUFFLDRDQUEyQjtRQUNsRCxzQkFBc0IsRUFBRSw2Q0FBNEI7UUFDcEQsbUJBQW1CLEVBQUUsMENBQXlCO1FBQzlDLGFBQWEsRUFBRSxvQ0FBbUI7UUFDbEMscUJBQXFCLEVBQUUsNENBQTJCO1FBQ2xELHNCQUFzQixFQUFFLDZDQUE0QjtRQUNwRCxVQUFVLEVBQUUsdUJBQVU7UUFDdEIsV0FBVyxFQUFFLHdCQUFXO1FBQ3hCLFlBQVksRUFBRSwyQkFBWTtRQUMxQixhQUFhLEVBQUUsNEJBQWE7UUFDNUIsY0FBYyxFQUFFLGlDQUFvQjtRQUNwQyxzQkFBc0IsRUFBRSwwQ0FBNEI7S0FDckQ7SUFFRCxVQUFVLEVBQUU7UUFDVixlQUFlLEVBQUU7WUFDZixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1NBQ0Y7S0FDRjtDQUNGLENBQUEifQ==