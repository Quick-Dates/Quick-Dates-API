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
var Students_1 = __importDefault(require("../../Students/models/Students"));
var Teachers_1 = __importDefault(require("../../Teachers/models/Teachers"));
var Teams_1 = __importDefault(require("../../Teams/models/Teams"));
var SituationTaskEnum_1 = require("../enuns/SituationTaskEnum");
var Tasks_1 = __importDefault(require("../models/Tasks"));
var StatusTaskService_1 = __importDefault(require("./StatusTaskService"));
var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.create = function (idTeam, _a) {
        var description = _a.description, finalDate = _a.finalDate, finalTime = _a.finalTime, maximumScore = _a.maximumScore, startDate = _a.startDate, startTime = _a.startTime, subject = _a.subject, title = _a.title, id_teacher = _a.id_teacher;
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, studentRepository, teacherRepository, teamRepository, teacher, team, tasksByFinalDate, task;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        teacherRepository = (0, typeorm_1.getRepository)(Teachers_1.default);
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: id_teacher } })];
                    case 1:
                        teacher = _b.sent();
                        if (!teacher) {
                            throw new AppError_1.default('Professor não encontrado', 404);
                        }
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: idTeam } })];
                    case 2:
                        team = _b.sent();
                        if (!team) {
                            throw new AppError_1.default('Turma não encontrada', 404);
                        }
                        if (maximumScore < 0 || maximumScore > 10) {
                            throw new AppError_1.default("Pontuação máxima inválida", 400);
                        }
                        if (!this.validateDates(startDate, startTime, finalDate, finalTime)) {
                            throw new AppError_1.default("Datas inválidas", 400);
                        }
                        return [4 /*yield*/, this.indexByFinalDate(finalDate, idTeam)];
                    case 3:
                        tasksByFinalDate = _b.sent();
                        if (tasksByFinalDate.length >= 2) {
                            throw new AppError_1.default("Já existe duas atividades avaliativas para essa data", 400);
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
                            id_teacher: teacher.id,
                            id_team: team.id
                        });
                        return [4 /*yield*/, taskRepository.save(task)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, { task: task, teacher: teacher }];
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
    TaskService.prototype.indexByFinalDate = function (finalDate, id_team) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        return [4 /*yield*/, taskRepository.find({
                                where: {
                                    finalDate: finalDate,
                                    id_team: id_team
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TaskService.prototype.update = function (id, id_teacher, taskData) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teacherRepository, task, teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        teacherRepository = (0, typeorm_1.getRepository)(Teachers_1.default);
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
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: id } })];
                    case 1:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        teacherRepository = (0, typeorm_1.getRepository)(Teachers_1.default);
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
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        teacherRepository = (0, typeorm_1.getRepository)(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: idTeacher } })];
                    case 1:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.find({ where: { id_teacher: teacher.id }, join: { alias: "task", leftJoinAndSelect: { team: "task.team", course: "team.course" } } })];
                    case 2:
                        tasks = _a.sent();
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    TaskService.prototype.indexTasksWeek = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teamRepository, team, startDateCurrentWeek, finalDateCurrentWeek, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
                        return [4 /*yield*/, teamRepository.findOne({ where: { id: student.team.id } })];
                    case 1:
                        team = _a.sent();
                        if (!team) {
                            throw new AppError_1.default("Turma não encontrada", 404);
                        }
                        startDateCurrentWeek = new Date()
                            .toLocaleDateString();
                        finalDateCurrentWeek = new Date(new Date().setDate(new Date().getDate() + 7))
                            .toLocaleDateString();
                        return [4 /*yield*/, taskRepository.find({
                                relations: ["statusTasks"],
                                where: {
                                    id_team: team.id,
                                    finalDate: (0, typeorm_1.Between)(startDateCurrentWeek, finalDateCurrentWeek),
                                }
                            })];
                    case 2:
                        tasks = _a.sent();
                        tasks.forEach(function (task) {
                            var _a;
                            (_a = task.statusTasks) === null || _a === void 0 ? void 0 : _a.forEach(function (statusTask) {
                                if (statusTask.id_student === student.id) {
                                    task.situation = statusTask.situation;
                                }
                            });
                            delete task.statusTasks;
                            delete task.id_teacher;
                        });
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    TaskService.prototype.statisticsWeekTasks = function (Tasks) {
        var length = Tasks.length;
        var completed = Tasks.filter(function (task) { return task.situation === SituationTaskEnum_1.SituationTaskEnum.CONCLUIDA; }).length;
        var inProgress = Tasks.filter(function (task) { return task.situation === SituationTaskEnum_1.SituationTaskEnum.EM_ANDAMENTO; }).length;
        var late = Tasks.filter(function (task) { return task.situation === SituationTaskEnum_1.SituationTaskEnum.ATRASADA; }).length;
        var successPercentage = (completed / length) * 100;
        return {
            length: length,
            completed: completed,
            inProgress: inProgress,
            late: late,
            successPercentage: successPercentage
        };
    };
    TaskService.prototype.indexByTeam = function (idTeam) {
        return __awaiter(this, void 0, void 0, function () {
            var taskRepository, teamRepository, team, tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        teamRepository = (0, typeorm_1.getRepository)(Teams_1.default);
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
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: idStudent }, join: { alias: "task", leftJoinAndSelect: { team: "task.team", course: "team.course" } } })];
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
                        studentRepository = (0, typeorm_1.getRepository)(Students_1.default);
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
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
            var teacherRepository, taskRepository, teacher, task, yearCurrent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teacherRepository = (0, typeorm_1.getRepository)(Teachers_1.default);
                        taskRepository = (0, typeorm_1.getRepository)(Tasks_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: idTeacher } })];
                    case 1:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default("Professor não encontrado", 404);
                        }
                        return [4 /*yield*/, taskRepository.findOne({ where: { id: idTask, id_teacher: idTeacher }, join: { alias: "task", leftJoinAndSelect: { team: "task.team", course: "team.course" } } })];
                    case 2:
                        task = _a.sent();
                        if (!task) {
                            throw new AppError_1.default("Tarefa não encontrada", 404);
                        }
                        if (teacher.id !== task.id_teacher) {
                            throw new AppError_1.default("Você não tem permissão para visualizar essa tarefa", 401);
                        }
                        delete task.id_teacher;
                        yearCurrent = new Date().getFullYear();
                        task.team.name = (yearCurrent - task.team.yearCreation) + 1 + "\u00B0 ano";
                        return [2 /*return*/, task];
                }
            });
        });
    };
    return TaskService;
}());
exports.default = TaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UYXNrcy9zZXJ2aWNlcy9UYXNrU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE2RDtBQUM3RCw2RUFBdUQ7QUFFdkQsNEVBQXNEO0FBQ3RELDRFQUFzRDtBQUN0RCxtRUFBNkM7QUFDN0MsZ0VBQStEO0FBRy9ELDBEQUFvQztBQUNwQywwRUFBb0Q7QUFFcEQ7SUFBQTtJQXFSQSxDQUFDO0lBcFJPLDRCQUFNLEdBQVosVUFBYSxNQUFjLEVBQUUsRUFBNEc7WUFBMUcsV0FBVyxpQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLFlBQVksa0JBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxVQUFVLGdCQUFBOzs7Ozs7d0JBRXhILGNBQWMsR0FBRyxJQUFBLHVCQUFhLEVBQUMsZUFBSyxDQUFDLENBQUM7d0JBQ3RDLGlCQUFpQixHQUFHLElBQUEsdUJBQWEsRUFBQyxrQkFBUSxDQUFDLENBQUM7d0JBQzVDLGlCQUFpQixHQUFHLElBQUEsdUJBQWEsRUFBQyxrQkFBUSxDQUFDLENBQUM7d0JBQzVDLGNBQWMsR0FBRyxJQUFBLHVCQUFhLEVBQUMsZUFBSyxDQUFDLENBQUM7d0JBRTVCLHFCQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLEVBQUE7O3dCQUF4RSxPQUFPLEdBQUcsU0FBOEQ7d0JBRTlFLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1osTUFBTSxJQUFJLGtCQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7eUJBQ3JEO3dCQUVZLHFC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