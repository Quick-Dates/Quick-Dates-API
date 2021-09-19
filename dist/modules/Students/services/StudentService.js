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
var TeamService_1 = __importDefault(require("../../Teams/services/TeamService"));
var Students_1 = __importDefault(require("../models/Students"));
var StudentService = /** @class */ (function () {
    function StudentService() {
    }
    StudentService.prototype.create = function (_a) {
        var id = _a.id, matricula = _a.matricula, nome_usual = _a.nome_usual, email = _a.email, data_nascimento = _a.data_nascimento, vinculo = _a.vinculo, sexo = _a.sexo, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, hashedPassword, student;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        return [4 /*yield*/, bcryptjs_1.hash(password, 10)];
                    case 1:
                        hashedPassword = _b.sent();
                        student = studentRepository.create({
                            registration: matricula,
                            name: nome_usual,
                            fullName: vinculo.nome,
                            password: hashedPassword,
                            email: email,
                            birthDate: data_nascimento,
                            situation: vinculo.situacao,
                            systematicSituation: vinculo.situacao_sistemica,
                            gender: sexo,
                            suapId: id
                        });
                        return [4 /*yield*/, studentRepository.save(student)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, student];
                }
            });
        });
    };
    StudentService.prototype.indexById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, teamService, student, team;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        studentRepository = typeorm_1.getRepository(Students_1.default);
                        teamService = new TeamService_1.default();
                        return [4 /*yield*/, studentRepository.findOne({ where: { id: id } })];
                    case 1:
                        student = _a.sent();
                        if (!student) {
                            throw new AppError_1.default('Aluno não encontrado', 404);
                        }
                        return [4 /*yield*/, teamService.indexById(student.id_team)];
                    case 2:
                        team = _a.sent();
                        student.team = team;
                        delete student.password;
                        delete student.suapId;
                        delete student.id_team;
                        return [2 /*return*/, student];
                }
            });
        });
    };
    return StudentService;
}());
exports.default = StudentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9TdHVkZW50cy9zZXJ2aWNlcy9TdHVkZW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFnQztBQUNoQyxtQ0FBd0M7QUFDeEMsNkVBQXVEO0FBRXZELGlGQUEyRDtBQUUzRCxnRUFBMEM7QUFFMUM7SUFBQTtJQTBDQSxDQUFDO0lBekNPLCtCQUFNLEdBQVosVUFBYSxFQUFrRztZQUFqRyxFQUFFLFFBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsZUFBZSxxQkFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLFFBQVEsY0FBQTs7Ozs7O3dCQUNoRixpQkFBaUIsR0FBRyx1QkFBYSxDQUFDLGtCQUFRLENBQUMsQ0FBQzt3QkFFM0IscUJBQU0sZUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBQTs7d0JBQXpDLGNBQWMsR0FBRyxTQUF3Qjt3QkFFekMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs0QkFDdkMsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLElBQUksRUFBRSxVQUFVOzRCQUNoQixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUk7NEJBQ3RCLFFBQVEsRUFBRSxjQUFjOzRCQUN4QixLQUFLLE9BQUE7NEJBQ0wsU0FBUyxFQUFFLGVBQWU7NEJBQzFCLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUTs0QkFDM0IsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLGtCQUFrQjs0QkFDL0MsTUFBTSxFQUFFLElBQUk7NEJBQ1osTUFBTSxFQUFFLEVBQUU7eUJBQ1gsQ0FBQyxDQUFDO3dCQUNILHFCQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQXJDLFNBQXFDLENBQUE7d0JBRXJDLHNCQUFPLE9BQU8sRUFBQTs7OztLQUNmO0lBRUssa0NBQVMsR0FBZixVQUFnQixFQUFVOzs7Ozs7d0JBQ2xCLGlCQUFpQixHQUFHLHVCQUFhLENBQUMsa0JBQVEsQ0FBQyxDQUFDO3dCQUM1QyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7d0JBR3RCLHFCQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUQsT0FBTyxHQUFHLFNBQWtEO3dCQUNsRSxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNaLE1BQU0sSUFBSSxrQkFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNqRDt3QkFFWSxxQkFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFpQixDQUFDLEVBQUE7O3dCQUE3RCxJQUFJLEdBQUcsU0FBc0Q7d0JBQ25FLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUVwQixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUM7d0JBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQzt3QkFDdEIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDO3dCQUV2QixzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDaEI7SUFDSCxxQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==