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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableTeams1631983440333 = void 0;
var CreateTableTeams1631983440333 = /** @class */ (function () {
    function CreateTableTeams1631983440333() {
    }
    CreateTableTeams1631983440333.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"teams\" (\n        \"id\" SERIAL NOT NULL PRIMARY KEY,\n        \"yearCreation\" INTEGER NOT NULL,\n        \"id_course\" integer NOT NULL,\n        FOREIGN KEY (\"id_course\") REFERENCES \"courses\" (\"id\")\n        );")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTableTeams1631983440333.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP TABLE \"teams\";")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateTableTeams1631983440333;
}());
exports.CreateTableTeams1631983440333 = CreateTableTeams1631983440333;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYzMTk4MzQ0MDMzMy1DcmVhdGVUYWJsZVRlYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kYXRhYmFzZS9taWdyYXRpb25zLzE2MzE5ODM0NDAzMzMtQ3JlYXRlVGFibGVUZWFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBZUEsQ0FBQztJQWJnQiwwQ0FBRSxHQUFmLFVBQWdCLFdBQXdCOzs7OzRCQUN0QyxxQkFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLDZPQUtuQixDQUFDLEVBQUE7O3dCQUxOLFNBS00sQ0FBQzs7Ozs7S0FDUjtJQUVZLDRDQUFJLEdBQWpCLFVBQWtCLFdBQXdCOzs7OzRCQUN4QyxxQkFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLHVCQUFxQixDQUFDLEVBQUE7O3dCQUE5QyxTQUE4QyxDQUFDOzs7OztLQUNoRDtJQUVMLG9DQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxzRUFBNkIifQ==