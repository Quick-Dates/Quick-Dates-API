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
var TeamService_1 = __importDefault(require("../services/TeamService"));
var teamsRouter = express_1.Router();
teamsRouter.put('/student/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, yearCreation, courseName, level, teamService, error_1, status_1, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, yearCreation = _a.yearCreation, courseName = _a.courseName, level = _a.level;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                teamService = new TeamService_1.default();
                return [4 /*yield*/, teamService.addStudentToTeam(id, yearCreation, courseName, level)];
            case 2:
                _b.sent();
                return [2 /*return*/, response.status(201).send()];
            case 3:
                error_1 = _b.sent();
                status_1 = error_1.response && error_1.response.status || 400;
                message = error_1.response && error_1.response.data.detail || error_1.message;
                console.error(message);
                return [2 /*return*/, response.status(status_1).json({ message: message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
teamsRouter.get('/:idCurso', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var idCurso, teamService, teams, error_2, status_2, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                idCurso = request.params.idCurso;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                teamService = new TeamService_1.default();
                return [4 /*yield*/, teamService.getTeamsByCourse(+idCurso)];
            case 2:
                teams = _a.sent();
                return [2 /*return*/, response.json(teams)];
            case 3:
                error_2 = _a.sent();
                status_2 = error_2.response && error_2.response.status || 400;
                message = error_2.response && error_2.response.data.detail || error_2.message;
                console.error(message);
                return [2 /*return*/, response.status(status_2).json({ message: message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = teamsRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhbXMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGVhbXMvY29udHJvbGxlcnMvdGVhbXMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLHdFQUFrRDtBQUVsRCxJQUFNLFdBQVcsR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFN0IsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7Ozs7Z0JBQzlDLEVBQUUsR0FBSyxPQUFPLENBQUMsTUFBTSxHQUFuQixDQUFvQjtnQkFDeEIsS0FBc0MsT0FBTyxDQUFDLElBQUksRUFBaEQsWUFBWSxrQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxLQUFLLFdBQUEsQ0FBa0I7Ozs7Z0JBRWxELFdBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztnQkFDdEMscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFBOztnQkFBdkUsU0FBdUUsQ0FBQztnQkFDeEUsc0JBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQzs7O2dCQUU1QixXQUFTLE9BQUssQ0FBQyxRQUFRLElBQUksT0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO2dCQUN4RCxPQUFPLEdBQUcsT0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkIsc0JBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBQyxDQUFDLEVBQUE7Ozs7S0FFakQsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7Ozs7Z0JBQzNDLE9BQU8sR0FBSyxPQUFPLENBQUMsTUFBTSxRQUFuQixDQUFvQjs7OztnQkFFNUIsV0FBVyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO2dCQUN4QixxQkFBTSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQTs7Z0JBQXBELEtBQUssR0FBRyxTQUE0QztnQkFDMUQsc0JBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQzs7O2dCQUVyQixXQUFTLE9BQUssQ0FBQyxRQUFRLElBQUksT0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO2dCQUN4RCxPQUFPLEdBQUcsT0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDOUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkIsc0JBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBQyxDQUFDLEVBQUE7Ozs7S0FFakQsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsV0FBVyxDQUFDIn0=