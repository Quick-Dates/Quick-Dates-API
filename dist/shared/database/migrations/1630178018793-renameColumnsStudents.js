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
exports.renameColumnsStudents1630178018793 = void 0;
var renameColumnsStudents1630178018793 = /** @class */ (function () {
    function renameColumnsStudents1630178018793() {
    }
    renameColumnsStudents1630178018793.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      ALTER TABLE students RENAME COLUMN \"birth_date\" TO \"birthDate\";\n      ALTER TABLE students RENAME COLUMN \"systematic_situation\" TO \"systematicSituation\";\n      ALTER TABLE students RENAME COLUMN \"suap_id\" TO \"suapId\";\n      ALTER TABLE students RENAME COLUMN \"full_name\" TO \"fullName\";\n      ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    renameColumnsStudents1630178018793.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("\n      ALTER TABLE students RENAME COLUMN \"birthDate\" TO \"birth_date\";\n      ALTER TABLE students RENAME COLUMN \"systematicSituation\" TO \"systematic_situation\";\n      ALTER TABLE students RENAME COLUMN \"suapId\" TO \"suap_id\";\n      ALTER TABLE students RENAME COLUMN \"fullName\" TO \"full_name\";\n      ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return renameColumnsStudents1630178018793;
}());
exports.renameColumnsStudents1630178018793 = renameColumnsStudents1630178018793;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYzMDE3ODAxODc5My1yZW5hbWVDb2x1bW5zU3R1ZGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RhdGFiYXNlL21pZ3JhdGlvbnMvMTYzMDE3ODAxODc5My1yZW5hbWVDb2x1bW5zU3R1ZGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQW9CQSxDQUFDO0lBbEJnQiwrQ0FBRSxHQUFmLFVBQWdCLFdBQXdCOzs7OzRCQUN0QyxxQkFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGtVQUt2QixDQUFDLEVBQUE7O3dCQUxGLFNBS0UsQ0FBQzs7Ozs7S0FDSjtJQUVZLGlEQUFJLEdBQWpCLFVBQWtCLFdBQXdCOzs7OzRCQUN4QyxxQkFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLGtVQUt2QixDQUFDLEVBQUE7O3dCQUxGLFNBS0UsQ0FBQzs7Ozs7S0FDSjtJQUVMLHlDQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxnRkFBa0MifQ==