import { studentGradesPath, studentPathWithId, studentRankingPath, studentsPathSignin } from './paths/students-path';
import { tasksPath, tasksPathWithId } from './paths/tasks-path';
import { teachersByIdPath, teachersPath } from './paths/teachers-path';
import { teamCoursesPath, teamsByCoursePath, teamsStudentPath } from './paths/teams-path';
import { courseSchema, coursesSchema } from './schemas/courseSchema';
import { studentFeatureErrorSchema, studentGetByIdResponseSchema, studentSigninResponseSchema, studentSigninSchema } from './schemas/student-schema';
import { taskSchema, taskParamsSchema, tasksSchema } from './schemas/task-schema'
import { teacherGetByIdResponseSchema, teacherSigninResponseSchema, teacherSigninSchema } from './schemas/teacher-schema';
import { teamCreateBodySchema, teamSchema, teamsSchema } from './schemas/team-shema';
export default {
  openapi: '3.0.0',
  info: {
    title: 'Quick Dates API',
    description: 'API para agendamento de atividades avaliativas acadêmicas',
    version: '1.0.0'
  },
  servers:[ {
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
    '/tasks': tasksPath,
    '/tasks/{id}': tasksPathWithId,
    '/students/signin': studentsPathSignin,
    '/students/{id}': studentPathWithId,
    '/students/ranking': studentRankingPath,
    '/students/grades': studentGradesPath,
    '/teachers/signin': teachersPath,
    '/teachers/{id}': teachersByIdPath,
    '/teams/{idCourse}': teamsByCoursePath,
    '/teams/courses': teamCoursesPath,
    '/teams/student/{idStudent}': teamsStudentPath,
  },
  schemas: {
    task: taskSchema,
    taskParams: taskParamsSchema,
    tasks: tasksSchema,
    studentSignin: studentSigninSchema,
    studentSigninResponse: studentSigninResponseSchema,
    studentGetByIdResponse: studentGetByIdResponseSchema,
    studentFeatureError: studentFeatureErrorSchema,
    teacherSignin: teacherSigninSchema,
    teacherSigninResponse: teacherSigninResponseSchema,
    teacherGetByIdResponse: teacherGetByIdResponseSchema,
    teamSchema: teamSchema,
    teamsSchema: teamsSchema,
    courseSchema: courseSchema,
    coursesSchema: coursesSchema,
    teamCreateBody: teamCreateBodySchema,
  }
}
