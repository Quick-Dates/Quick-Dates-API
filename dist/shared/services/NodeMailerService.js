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
var setup_nodemailer_1 = __importDefault(require("../config/setup-nodemailer"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var handlebars_1 = __importDefault(require("handlebars"));
var GenderEnum_1 = require("../enum/GenderEnum");
var NodeMailerService = /** @class */ (function () {
    function NodeMailerService() {
    }
    NodeMailerService.prototype.sendEmailTaskShortDeadline = function (student, teacher, task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmail({
                            toEmail: student.email,
                            subject: 'Atividades próximas',
                            header: "Voc\u00EA possui atividades pr\u00F3ximas",
                            content: "Oi " + student.name + " A atividade " + task.title + " deve ser entregue at\u00E9 " + task.finalDate + " " + task.finalTime
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeMailerService.prototype.sendEmailTaskCreated = function (student, teacher, task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmail({
                            toEmail: student.email,
                            subject: 'Nova Atividade',
                            header: "Atividade " + task.title + " criada",
                            content: "Oi " + student.name + ", " + (teacher.gender === GenderEnum_1.GenderEnum.Masculino ? 'o Professor' : 'a Professora') + " " + teacher.name + " de " + task.subject + "\n      neste momento agendou uma atividade " + task.title + ". Entre no Quick Dates para mais detalhes!"
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeMailerService.prototype.sendEmailWelcome = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmail({
                            toEmail: user.email,
                            subject: 'Bem vindo',
                            header: "Bem vind" + (user.gender === GenderEnum_1.GenderEnum.Masculino ? 'o' : 'a') + " ao Quick Dates",
                            content: "Estamos felizes em ter voc\u00EA " + user.name + " na plataforma Quick Dates"
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeMailerService.prototype.sendEmail = function (_a) {
        var toEmail = _a.toEmail, subject = _a.subject, header = _a.header, content = _a.content;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, setup_nodemailer_1.default.sendMail({
                            from: "Quick Dates <" + process.env.EMAIL + ">",
                            to: toEmail,
                            subject: subject,
                            text: header + " \n " + content,
                            html: this.htmlToSend(header, content)
                        })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeMailerService.prototype.htmlToSend = function (header, content) {
        var filePath = path_1.default.join(__dirname, '../../views/template/email.html');
        var source = fs_1.default.readFileSync(filePath, 'utf-8').toString();
        var template = handlebars_1.default.compile(source);
        var replacements = {
            header: header,
            content: content
        };
        return template(replacements);
    };
    return NodeMailerService;
}());
exports.default = NodeMailerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZU1haWxlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL05vZGVNYWlsZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0ZBQXFEO0FBQ3JELDhDQUF3QjtBQUN4QiwwQ0FBb0I7QUFDcEIsMERBQW9DO0FBR3BDLGlEQUFnRDtBQVdoRDtJQUFBO0lBa0RBLENBQUM7SUFoRE8sc0RBQTBCLEdBQWhDLFVBQWlDLE9BQWlCLEVBQUUsT0FBaUIsRUFBRSxJQUFXOzs7OzRCQUNoRixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNuQixPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUs7NEJBQ3RCLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLE1BQU0sRUFBRSwyQ0FBaUM7NEJBQ3pDLE9BQU8sRUFBRSxRQUFNLE9BQU8sQ0FBQyxJQUFJLHFCQUFnQixJQUFJLENBQUMsS0FBSyxvQ0FBMEIsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsU0FBVzt5QkFDbEgsQ0FBQyxFQUFBOzt3QkFMRixTQUtFLENBQUE7Ozs7O0tBQ0g7SUFDSyxnREFBb0IsR0FBMUIsVUFBMkIsT0FBaUIsRUFBRSxPQUFpQixFQUFFLElBQVc7Ozs7NEJBQzFFLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ25CLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDdEIsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsTUFBTSxFQUFFLGVBQWEsSUFBSSxDQUFDLEtBQUssWUFBUzs0QkFDeEMsT0FBTyxFQUFFLFFBQU0sT0FBTyxDQUFDLElBQUksV0FBSyxPQUFPLENBQUMsTUFBTSxLQUFLLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsVUFBSSxPQUFPLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxPQUFPLG9EQUNyRyxJQUFJLENBQUMsS0FBSywrQ0FBNEM7eUJBQzdGLENBQUMsRUFBQTs7d0JBTkYsU0FNRSxDQUFBOzs7OztLQUNIO0lBRUssNENBQWdCLEdBQXRCLFVBQXVCLElBQXlCOzs7OzRCQUM5QyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ25CLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixNQUFNLEVBQUUsY0FBVyxJQUFJLENBQUMsTUFBTSxLQUFLLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQWlCOzRCQUNwRixPQUFPLEVBQUUsc0NBQStCLElBQUksQ0FBQyxJQUFJLCtCQUE0Qjt5QkFDOUUsQ0FBQyxFQUFBOzt3QkFMRixTQUtFLENBQUE7Ozs7O0tBQ0g7SUFFYSxxQ0FBUyxHQUF2QixVQUF3QixFQUF3RDtZQUF0RCxPQUFPLGFBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxPQUFPLGFBQUE7Ozs7NEJBQ3pELHFCQUFNLDBCQUFXLENBQUMsUUFBUSxDQUFDOzRCQUN6QixJQUFJLEVBQUUsa0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxNQUFHOzRCQUMxQyxFQUFFLEVBQUUsT0FBTzs0QkFDWCxPQUFPLEVBQUUsT0FBTzs0QkFDaEIsSUFBSSxFQUFLLE1BQU0sWUFBTyxPQUFTOzRCQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO3lCQUN2QyxDQUFDLEVBQUE7O3dCQU5GLFNBTUUsQ0FBQTs7Ozs7S0FDSDtJQUVPLHNDQUFVLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxPQUFlO1FBQ2hELElBQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFDekUsSUFBTSxNQUFNLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0QsSUFBTSxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBTSxZQUFZLEdBQUc7WUFDbkIsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1NBQ1IsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUFsREQsSUFrREMifQ==