"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var AuthService_1 = __importDefault(require("../services/AuthService"));
var SuapService_1 = __importDefault(require("../../../shared/services/SuapService"));
var teachersRouter = express_1.Router();
teachersRouter.post('/signin', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, suapService, authService, tokenSuap, dataTeacher, token, error_1, status_1, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, username = _a.username, password = _a.password;
                console.log(username, password);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                suapService = new SuapService_1.default();
                authService = new AuthService_1.default();
                return [4 /*yield*/, suapService.signin({ username: username, password: password })];
            case 2:
                tokenSuap = _b.sent();
                return [4 /*yield*/, suapService.indexMyData(tokenSuap)];
            case 3:
                dataTeacher = _b.sent();
                return [4 /*yield*/, authService.execute({ tokenSuap: tokenSuap.token, dataTeacher: __assign(__assign({}, dataTeacher), { password: password }) })];
            case 4:
                token = _b.sent();
                return [2 /*return*/, response.json(token)];
            case 5:
                error_1 = _b.sent();
                status_1 = error_1.response && error_1.response.status || 400;
                message = error_1.response && error_1.response.data.detail || error_1.message;
                console.error(message);
                return [2 /*return*/, response.status(status_1).json({ message: message })];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = teachersRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvVGVhY2hlcnMvY29udHJvbGxlcnMvdGVhY2hlcnMucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsd0VBQWtEO0FBQ2xELHFGQUErRDtBQUcvRCxJQUFNLGNBQWMsR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFaEMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBTyxPQUFPLEVBQUUsUUFBUTs7Ozs7Z0JBQy9DLEtBQXlCLE9BQU8sQ0FBQyxJQUFJLEVBQW5DLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQSxDQUFrQjtnQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7Z0JBRXhCLFdBQVcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQztnQkFDaEMsV0FBVyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO2dCQUVwQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxFQUFBOztnQkFBMUQsU0FBUyxHQUFHLFNBQThDO2dCQUM1QyxxQkFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFBOztnQkFBdEQsV0FBVyxHQUFHLFNBQXdDO2dCQUM5QyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLHNCQUFJLFdBQVcsS0FBRSxRQUFRLFVBQUEsR0FBb0IsRUFBQyxDQUFDLEVBQUE7O2dCQUEzSCxLQUFLLEdBQUcsU0FBbUg7Z0JBRWpJLHNCQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7OztnQkFFdEIsV0FBUyxPQUFLLENBQUMsUUFBUSxJQUFJLE9BQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztnQkFDeEQsT0FBTyxHQUFHLE9BQUssQ0FBQyxRQUFRLElBQUksT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzlFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLHNCQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxTQUFBLEVBQUMsQ0FBQyxFQUFBOzs7O0tBRWpELENBQUMsQ0FBQztBQUVILGtCQUFlLGNBQWMsQ0FBQyJ9