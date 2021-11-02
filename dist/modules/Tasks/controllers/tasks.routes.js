"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("../../../shared/middlewares/ensureAuthenticated"));
var student_1 = __importDefault(require("../../../shared/middlewares/student"));
var teacher_1 = __importDefault(require("../../../shared/middlewares/teacher"));
var StatusTaskService_1 = __importDefault(require("../services/StatusTaskService"));
var TaskService_1 = __importDefault(require("../services/TaskService"));
var TeamService_1 = __importDefault(require("../../Teams/services/TeamService"));
var StudentService_1 = __importDefault(require("../../Students/services/StudentService"));
var tasksRouter = (0, express_1.Router)();
tasksRouter.use(ensureAuthenticated_1.default);
tasksRouter.post('/team/:id', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, id_teacher, _a, description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, taskService, teamService, statusTaskService, _b, task, teacher, studentsByTeam;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = request.params.id;
                id_teacher = request.user.id;
                _a = request.body, description = _a.description, finalDate = _a.finalDate, finalTime = _a.finalTime, maximumScore = _a.maximumScore, startDate = _a.startDate, startTime = _a.startTime, subject = _a.subject, title = _a.title;
                taskService = new TaskService_1.default();
                teamService = new TeamService_1.default();
                statusTaskService = new StatusTaskService_1.default();
                return [4 /*yield*/, taskService.create(+id, {
                        id_teacher: id_teacher,
                        description: description,
                        finalDate: finalDate,
                        finalTime: finalTime,
                        maximumScore: maximumScore,
                        startDate: startDate,
                        startTime: startTime,
                        subject: subject,
                        title: title
                    })];
            case 1:
                _b = _c.sent(), task = _b.task, teacher = _b.teacher;
                return [4 /*yield*/, teamService.indexStudentsByTeam(+id)];
            case 2:
                studentsByTeam = _c.sent();
                return [4 /*yield*/, statusTaskService.createTaskByStudents(studentsByTeam, task, teacher)];
            case 3:
                _c.sent();
                return [2 /*return*/, response.status(201).send()];
        }
    });
}); });
tasksRouter.put('/:id', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, id_teacher, _a, description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, taskService;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                id_teacher = request.user.id;
                _a = request.body, description = _a.description, finalDate = _a.finalDate, finalTime = _a.finalTime, maximumScore = _a.maximumScore, startDate = _a.startDate, startTime = _a.startTime, subject = _a.subject, title = _a.title;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.update(+id, id_teacher, {
                        description: description,
                        finalDate: finalDate,
                        finalTime: finalTime,
                        maximumScore: maximumScore,
                        startDate: startDate,
                        startTime: startTime,
                        subject: subject,
                        title: title
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/, response.status(204).send()];
        }
    });
}); });
tasksRouter.patch('/:id/situation', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, id_student, completed, statusTaskService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                id_student = request.user.id;
                completed = request.body.completed;
                statusTaskService = new StatusTaskService_1.default();
                return [4 /*yield*/, statusTaskService.updateSituation(+id, id_student, completed)];
            case 1:
                _a.sent();
                return [2 /*return*/, response.status(204).send()];
        }
    });
}); });
tasksRouter.delete('/:id', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, id_teacher, taskService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                id_teacher = request.user.id;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.delete(+id, id_teacher)];
            case 1:
                _a.sent();
                return [2 /*return*/, response.status(204).send()];
        }
    });
}); });
tasksRouter.get('/teacher', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id_teacher, taskService, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id_teacher = request.user.id;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.indexByTeacher(id_teacher)];
            case 1:
                tasks = _a.sent();
                return [2 /*return*/, response.json(tasks)];
        }
    });
}); });
tasksRouter.get('/student', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var idStudent, taskService, studentService, student, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idStudent = request.user.id;
                taskService = new TaskService_1.default();
                studentService = new StudentService_1.default();
                return [4 /*yield*/, studentService.indexById(idStudent)];
            case 1:
                student = _a.sent();
                return [4 /*yield*/, taskService.indexByTeam(student.team.id)];
            case 2:
                tasks = _a.sent();
                return [2 /*return*/, response.json(tasks)];
        }
    });
}); });
tasksRouter.get('/:id/teacher', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, idTeacher, taskService, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +request.params.id;
                idTeacher = request.user.id;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.indexByIdWithTeacher(id, idTeacher)];
            case 1:
                tasks = _a.sent();
                return [2 /*return*/, response.json(tasks)];
        }
    });
}); });
tasksRouter.get('/:id/student', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, idStudent, taskService, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +request.params.id;
                idStudent = request.user.id;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.indexByIdWithStudent(id, idStudent)];
            case 1:
                tasks = _a.sent();
                return [2 /*return*/, response.json(tasks)];
        }
    });
}); });
tasksRouter.get('/statistics-week', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var idStudent, taskService, studentService, student, tasks, statisticsWeekTasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idStudent = request.user.id;
                taskService = new TaskService_1.default();
                studentService = new StudentService_1.default();
                return [4 /*yield*/, studentService.indexById(idStudent)];
            case 1:
                student = _a.sent();
                return [4 /*yield*/, taskService.indexTasksWeek(student)];
            case 2:
                tasks = _a.sent();
                statisticsWeekTasks = taskService.statisticsWeekTasks(tasks);
                return [2 /*return*/, response.json(statisticsWeekTasks)];
        }
    });
}); });
exports.default = tasksRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Mucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGFza3MvY29udHJvbGxlcnMvdGFza3Mucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBRWpDLHdHQUFrRjtBQUNsRixnRkFBMEQ7QUFDMUQsZ0ZBQTBEO0FBRTFELG9GQUE4RDtBQUM5RCx3RUFBa0Q7QUFDbEQsaUZBQTJEO0FBQzNELDBGQUFvRTtBQUVwRSxJQUFNLFdBQVcsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUU3QixXQUFXLENBQUMsR0FBRyxDQUFDLDZCQUFtQixDQUFDLENBQUE7QUFFcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsaUJBQU8sRUFBRSxVQUFPLE9BQU8sRUFBRSxRQUFROzs7OztnQkFDckQsRUFBRSxHQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQW5CLENBQW9CO2dCQUN4QixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLEtBQTRGLE9BQU8sQ0FBQyxJQUFJLEVBQXRHLFdBQVcsaUJBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxZQUFZLGtCQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsS0FBSyxXQUFBLENBQWtCO2dCQUV6RyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7Z0JBQ2hDLFdBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztnQkFDaEMsaUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO2dCQUczQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNuRCxVQUFVLFlBQUE7d0JBQUUsV0FBVyxhQUFBO3dCQUFF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