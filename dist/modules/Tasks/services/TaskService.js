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
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var NodeMailerService_1 = __importDefault(require("../../../shared/services/NodeMailerService"));
var Students_1 = __importDefault(require("../../Students/models/Students"));
var Teachers_1 = __importDefault(require("../../Teachers/models/Teachers"));
var Teams_1 = __importDefault(require("../../Teams/models/Teams"));
var Tasks_1 = __importDefault(require("../models/Tasks"));
var StatusTaskService_1 = __importDefault(require("./StatusTaskService"));
var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.create = function (idTeam, _a) {
        var description = _a.description, finalDate = _a.finalDate, finalTime = _a.finalTime, maximumScore = _a.maximumScore, startDate = _a.startDate, startTime = _a.startTime, subject = _a.subject, title = _a.title, id_teacher = _a.id_teacher;
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, studentRepository, teacherRepository, teacher, task, studentsByTeam, statusTaskService;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: id_teacher } })];
                    case 1:
                        teacher = _b.sent();
                        if (!teacher) {
                            throw new AppError_1.default('Professor não encontrado', 404);
                        }
                        if (maximumScore < 0 || maximumScore > 10) {
                            throw new AppError_1.default("Pontuação máxima inválida", 400);
                        }
                        if (!this.validateDates(startDate, startTime, finalDate, finalTime)) {
                            throw new AppError_1.default("Datas inválidas", 400);
                        }
                        task = taskRepository.create({
                            description: description,
                            finalDate: finalDate,
                            finalTime: finalTime,
                            maximumScore: maximumScore,
                            startDate: startDate,
                            startTime: startTime,
                            subject: subject,
                            title: title,
                            teacher: teacher,
                            id_teacher: teacher.id
                        });
                        return [4 /*yield*/, taskRepository.save(task)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, studentRepository.find({ where: { id_team: idTeam } })];
                    case 3:
                        studentsByTeam = _b.sent();
                        statusTaskService = new StatusTaskService_1.default();
                        studentsByTeam.forEach(function (student) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, statusTaskService.create({
                                            id_student: student.id,
                                            id_task: task.id
                                        })];
                                    case 1:
                                        _a.sent();
                                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                            var nodeMailerService;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        nodeMailerService = new NodeMailerService_1.default();
                                                        return [4 /*yield*/, nodeMailerService.sendEmailTaskCreated(student, teacher, task)];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }, 3000);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/, task];
                }
            });
        });
    };
    TaskService.prototype.validateDates = function (startDate, startTime, finalDate, finalTime) {
        var startDateTime = new Date(startDate + " " + startTime);
        var finalDateTime = new Date(finalDate + " " + finalTime);
        if (finalDateTime < startDateTime) {
            return false;
        }
        if (startDateTime < new Date()) {
            return false;
        }
        return true;
    };
    TaskService.prototype.update = function (id, id_teacher, taskData) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teacherRepository, task, teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: id } })];
                    case 1:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: id_teacher } })];
                    case 2:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        if (teacher.id !== task.id_teacher) {
                            throw new AppError_1.default("Você não tem permissão para alterar essa tarefa", 401);
                        }
                        if (taskData.maximumScore < 0 || taskData.maximumScore > 10) {
                            throw new AppError_1.default("Pontuação máxima inválida", 400);
                        }
                        return [4 /*yield*/, taskRepository.update(id, taskData)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, taskData];
                }
            });
        });
    };
    TaskService.prototype.delete = function (id, idTeacher) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, task, teacherRepository, teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: id } })];
                    case 1:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: idTeacher } })];
                    case 2:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        if (teacher.id !== task.id_teacher) {
                            throw new AppError_1.default("Você não tem permissão para deletar essa tarefa", 401);
                        }
                        return [4 /*yield*/, taskRepository.delete(id)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, task];
                }
            });
        });
    };
    TaskService.prototype.indexByTeacher = function (idTeacher) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teacherRepository, teacher, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: idTeacher } })];
                    case 1:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.find({ where: { id_teacher: teacher.id } })];
                    case 2:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    TaskService.prototype.indexByTeam = function (idTeam) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teamRepository, team, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        teamRepository = typeorm_1.getRepository(Teams_1.default);
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: idTeam } })];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            throw new AppError_1.default("Turma não encontrada", 404);
                        }
                        return [4 /*yield*/, taskRepository.find({ where: { id_team: team.id } })];
                    case 2:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    TaskService.prototype.indexTasksByStudent = function (idStudent) {
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, student, statusTaskService, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: idStudent } })];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default("Aluno não encontrado", 404);
                        }
                        statusTaskService = new StatusTaskService_1.default();
                        return [4 /*yield*/, statusTaskService.indexTasksByStudent(idStudent)];
                    case 2:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    TaskService.prototype.indexByIdWithStudent = function (idTask, idStudent) {
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, taskRepository, student, task, statusTaskService, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: idStudent } })];
                    case 1:
                        student = _b.sent();
                        if (!student) {
                            throw new AppError_1.default("Aluno não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: idTask } })];
                    case 2:
                        task = _b.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        statusTaskService = new StatusTaskService_1.default();
                        _a = task;
                        return [4 /*yield*/, statusTaskService.indexSituation(idTask, idStudent)];
                    case 3:
                        _a.situation = (_b.sent());
                        delete task.id_teacher;
                        return [2 /*return*/, task];
                }
            });
        });
    };
    TaskService.prototype.indexByIdWithTeacher = function (idTask, idTeacher) {
        return __awaiter(this, void 0, void 0, function () {
            var teacherRepository, taskRepository, teacher, task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        taskRepository = typeorm_1.getRepository(Tasks_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: idTeacher } })];
                    case 1:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: idTask, id_teacher: idTeacher } })];
                    case 2:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        if (teacher.id !== task.id_teacher) {
                            throw new AppError_1.default("Você não tem permissão para visualizar essa tarefa", 401);
                        }
                        delete task.id_teacher;
                        return [2 /*return*/, task];
                }
            });
        });
    };
    return TaskService;
}());
exports.default = TaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9zZXJ2aWNlcy9UYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUF3QztBQUN4Qyw2RUFBdUQ7QUFDdkQsaUdBQTJFO0FBQzNFLDRFQUFzRDtBQUN0RCw0RUFBc0Q7QUFDdEQsbUVBQTZDO0FBRTdDLDBEQUFvQztBQUNwQywwRUFBb0Q7QUFFcEQ7SUFBQTtJQWdOQSxDQUFDO0lBL01PLDRCQUFNLEdBQVosVUFBYSxNQUFjLEVBQUUsRUFBNEc7WUFBMUcsV0FBVyxpQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLFlBQVksa0JBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxVQUFVLGdCQUFBOzs7Ozs7O3dCQUN4SCxjQUFjLEdBQUcsdUJBQWEsQ0FBQyxlQUFLLENBQUMsQ0FBQzt3QkFDdEMsaUJBQWlCLEdBQUcsdUJBQWEsQ0FBQyxrQkFBUSxDQUFDLENBQUM7d0JBQzVDLGlCQUFpQixHQUFHLHVCQUFhLENBQUMsa0JBQVEsQ0FBQyxDQUFDO3dCQUVsQyxxQkFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBeEUsT0FBTyxHQUFHLFNBQThEO3dCQUU5RSxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNaLE1BQU0sSUFBSSxrQkFBUSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNyRDt3QkFFRCxJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksWUFBWSxHQUFHLEVBQUUsRUFBRTs0QkFDekMsTUFBTSxJQUFJLGtC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