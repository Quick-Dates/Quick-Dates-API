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
var bcryptjs_1 = require("bcryptjs");
var typeorm_1 = require("typeorm");
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var NodeMailerService_1 = __importDefault(require("../../../shared/services/NodeMailerService"));
var Teachers_1 = __importDefault(require("../models/Teachers"));
var TeacherService = /** @class */ (function () {
    function TeacherService() {
    }
    TeacherService.prototype.create = function (_a) {
        var id = _a.id, matricula = _a.matricula, nome_usual = _a.nome_usual, email = _a.email, data_nascimento = _a.data_nascimento, vinculo = _a.vinculo, sexo = _a.sexo, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var teacherRepository, hashedPassword, teacher;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                    case 1:
                        hashedPassword = _b.sent();
                        teacher = teacherRepository.create({
                            registration: matricula,
                            name: nome_usual,
                            fullName: vinculo.nome,
                            password: hashedPassword,
                            email: email,
                            birthDate: data_nascimento,
                            gender: sexo,
                            suapId: id
                        });
                        return [4 /*yield*/, teacherRepository.save(teacher)];
                    case 2:
                        _b.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var nodeMailerService;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        nodeMailerService = new NodeMailerService_1.default();
                                        return [4 /*yield*/, nodeMailerService.sendEmailWelcome(teacher)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 3000);
                        return [2 /*return*/, teacher];
                }
            });
        });
    };
    TeacherService.prototype.indexById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var teacherRepository, teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teacherRepository = typeorm_1.getRepository(Teachers_1.default);
                        return [4 /*yield*/, teacherRepository.findOne({ where: { id: id } })];
                    case 1:
                        teacher = _a.sent();
                        if (!teacher) {
                            throw new AppError_1.default('Professor não encontrado', 404);
                        }
                        delete teacher.password;
                        delete teacher.suapId;
                        return [2 /*return*/, teacher];
                }
            });
        });
    };
    return TeacherService;
}());
exports.default = TeacherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhY2hlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9UZWFjaGVycy9zZXJ2aWNlcy9UZWFjaGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnQztBQUNoQyxtQ0FBd0M7QUFDeEMsNkVBQXVEO0FBQ3ZELGlHQUEyRTtBQUUzRSxnRUFBMEM7QUFFMUM7SUFBQTtJQXVDQSxDQUFDO0lBdENPLCtCQUFNLEdBQVosVUFBYSxFQUFrRztZQUFqRyxFQUFFLFFBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsZUFBZSxxQkFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBQTs7Ozs7Ozt3QkFDaEYsaUJBQWlCLEdBQUcsdUJBQWEsQ0FBQyxrQkFBUSxDQUFDLENBQUM7d0JBRTNCLHFCQUFNLGVBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUE7O3dCQUF6QyxjQUFjLEdBQUcsU0FBd0I7d0JBRXpDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7NEJBQ3ZDLFlBQVksRUFBRSxTQUFTOzRCQUN2QixJQUFJLEVBQUUsVUFBVTs0QkFDaEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJOzRCQUN0QixRQUFRLEVBQUUsY0FBYzs0QkFDeEIsS0FBSyxPQUFBOzRCQUNMLFNBQVMsRUFBRSxlQUFlOzRCQUMxQixNQUFNLEVBQUUsSUFBSTs0QkFDWixNQUFNLEVBQUUsRUFBRTt5QkFDWCxDQUFDLENBQUM7d0JBQ0gscUJBQU0saUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBckMsU0FBcUMsQ0FBQTt3QkFFckMsVUFBVSxDQUFDOzs7Ozt3Q0FDSCxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7d0NBQ2xELHFCQUFNLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3Q0FBakQsU0FBaUQsQ0FBQzs7Ozs2QkFDbkQsRUFBRSxJQUFJLENBQUMsQ0FBQTt3QkFFUixzQkFBTyxPQUFPLEVBQUE7Ozs7S0FDZjtJQUVLLGtDQUFTLEdBQWYsVUFBZ0IsRUFBVTs7Ozs7O3dCQUNsQixpQkFBaUIsR0FBRyx1QkFBYSxDQUFDLGtCQUFRLENBQUMsQ0FBQzt3QkFFbEMscUJBQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxDQUFDLEVBQUE7O3dCQUE1RCxPQUFPLEdBQUcsU0FBa0Q7d0JBQ2xFLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1osTUFBTSxJQUFJLGtCQUFRLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUM7eUJBQ3JEO3dCQUVELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQzt3QkFDeEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUV0QixzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDaEI7SUFDSCxxQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==