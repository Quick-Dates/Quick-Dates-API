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
var setup_api_suap_1 = __importDefault(require("../config/setup-api-suap"));
var SuapService = /** @class */ (function () {
    function SuapService() {
    }
    SuapService.prototype.signin = function (_a) {
        var username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, setup_api_suap_1.default.post('/autenticacao/token/', { username: username, password: password })];
                    case 1:
                        token = (_b.sent()).data;
                        return [2 /*return*/, token];
                }
            });
        });
    };
    SuapService.prototype.indexMyData = function (_a) {
        var token = _a.token;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, setup_api_suap_1.default.get('/minhas-informacoes/meus-dados', {
                            headers: {
                                Authorization: "JWT " + token,
                            }
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return SuapService;
}());
exports.default = SuapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VhcFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL3NlcnZpY2VzL1N1YXBTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQStDO0FBSS9DO0lBQUE7SUFjQSxDQUFDO0lBYk8sNEJBQU0sR0FBWixVQUFhLEVBQXFDO1lBQW5DLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQTs7Ozs7NEJBQ1QscUJBQU0sd0JBQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLEVBQUE7O3dCQUEzRSxLQUFLLEdBQUksQ0FBQSxTQUFrRSxDQUFBLEtBQXRFO3dCQUNsQixzQkFBTyxLQUFLLEVBQUM7Ozs7S0FDZDtJQUVLLGlDQUFXLEdBQWpCLFVBQWtCLEVBQXNCO1lBQXJCLEtBQUssV0FBQTs7Ozs7NEJBQ0wscUJBQU0sd0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUU7NEJBQ25FLE9BQU8sRUFBRTtnQ0FDUCxhQUFhLEVBQUUsU0FBTyxLQUFPOzZCQUM5Qjt5QkFDRixDQUFDLEVBQUE7O3dCQUpNLElBQUksR0FBSyxDQUFBLFNBSWYsQ0FBQSxLQUpVO3dCQUtaLHNCQUFPLElBQUksRUFBQzs7OztLQUNiO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUVELGtCQUFlLFdBQVcsQ0FBQyJ9