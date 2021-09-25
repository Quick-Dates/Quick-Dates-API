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
var setup_nodemailer_1 = __importDefault(require("../../../shared/config/setup-nodemailer"));
var ensureAuthenticated_1 = __importDefault(require("../../../shared/middlewares/ensureAuthenticated"));
var student_1 = __importDefault(require("../../../shared/middlewares/student"));
var teacher_1 = __importDefault(require("../../../shared/middlewares/teacher"));
var StatusTaskService_1 = __importDefault(require("../services/StatusTaskService"));
var TaskService_1 = __importDefault(require("../services/TaskService"));
var tasksRouter = express_1.Router();
tasksRouter.use(ensureAuthenticated_1.default);
tasksRouter.post('/team/:id', teacher_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, id_teacher, _a, description, finalDate, finalTime, maximumScore, startDate, startTime, subject, title, taskService;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                id_teacher = request.user.id;
                _a = request.body, description = _a.description, finalDate = _a.finalDate, finalTime = _a.finalTime, maximumScore = _a.maximumScore, startDate = _a.startDate, startTime = _a.startTime, subject = _a.subject, title = _a.title;
                taskService = new TaskService_1.default();
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
                _b.sent();
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
    var idStudent, taskService, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idStudent = request.user.id;
                taskService = new TaskService_1.default();
                return [4 /*yield*/, taskService.indexTasksByStudent(idStudent)];
            case 1:
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
tasksRouter.post('/email', student_1.default, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                message = request.body.message;
                console.log(process.env.EMAIL);
                console.log(request.user.email);
                return [4 /*yield*/, setup_nodemailer_1.default.sendMail({
                        from: "Quick Dates <" + process.env.EMAIL + ">",
                        to: "" + request.user.email,
                        subject: 'Quick Dates - Tarefa',
                        text: message,
                        html: "<h1>" + message + "</h1>"
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, response.json({ message: message })];
        }
    });
}); });
exports.default = tasksRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3Mucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGFza3MvY29udHJvbGxlcnMvdGFza3Mucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLDZGQUFrRTtBQUNsRSx3R0FBa0Y7QUFDbEYsZ0ZBQTBEO0FBQzFELGdGQUEwRDtBQUUxRCxvRkFBOEQ7QUFDOUQsd0VBQWtEO0FBS2xELElBQU0sV0FBVyxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUU3QixXQUFXLENBQUMsR0FBRyxDQUFDLDZCQUFtQixDQUFDLENBQUE7QUFFcEMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsaUJBQU8sRUFBRSxVQUFPLE9BQU8sRUFBRSxRQUFROzs7OztnQkFDckQsRUFBRSxHQUFLLE9BQU8sQ0FBQyxNQUFNLEdBQW5CLENBQW9CO2dCQUN4QixVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLEtBQTRGLE9BQU8sQ0FBQyxJQUFJLEVBQXRHLFdBQVcsaUJBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxZQUFZLGtCQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsS0FBSyxXQUFBLENBQWtCO2dCQUV6RyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7Z0JBRXRDLHFCQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQzVCLFVBQVUsWUFBQTt3QkFBRSxXQUFXLGFBQUE7d0JBQUUsU0FBUyxXQUFBO3dCQUFFLFNBQVMsV0FBQTt3QkFBRSxZQUFZLGNBQUE7d0JBQUUsU0FBUyxXQUFBO3dCQUFFLFNBQVMsV0FBQTt3QkFBRSxPQUFPLFNBQUE7d0JBQUUs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