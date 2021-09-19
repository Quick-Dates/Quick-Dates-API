"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasks_routes_1 = __importDefault(require("../../modules/Tasks/routes/tasks.routes"));
var students_routes_1 = __importDefault(require("../../modules/Students/controllers/students.routes"));
var teachers_routes_1 = __importDefault(require("../../modules/Teachers/controllers/teachers.routes"));
var teams_routes_1 = __importDefault(require("../../modules/Teams/controllers/teams.routes"));
var routes = express_1.Router();
routes.use('/tasks', tasks_routes_1.default);
routes.use('/teachers', teachers_routes_1.default);
routes.use('/students', students_routes_1.default);
routes.use('/teams', teams_routes_1.default);
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFpQztBQUVqQyx5RkFBa0U7QUFDbEUsdUdBQWdGO0FBQ2hGLHVHQUFnRjtBQUNoRiw4RkFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSx5QkFBYyxDQUFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUseUJBQWMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQztBQUVsQyxrQkFBZSxNQUFNLENBQUMifQ==