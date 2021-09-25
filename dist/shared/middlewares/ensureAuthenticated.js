"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var AppError_1 = __importDefault(require("../errors/AppError"));
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('JWT token ausente', 401);
    }
    var _a = authHeader.split(' '), token = _a[1];
    try {
        var decoded = jsonwebtoken_1.verify(token, process.env.AUTH_SECRET);
        request.user = decoded;
        return next();
    }
    catch (_b) {
        throw new AppError_1.default('JWT token Inválido', 401);
    }
}
exports.default = ensureAuthenticated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlQXV0aGVudGljYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvbWlkZGxld2FyZXMvZW5zdXJlQXV0aGVudGljYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDZDQUFzQztBQUd0QyxnRUFBeUM7QUFlekMsU0FBd0IsbUJBQW1CLENBQ3ZDLE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLElBQWtCO0lBRWQsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7SUFFaEQsSUFBRyxDQUFDLFVBQVUsRUFBQztRQUNYLE1BQU0sSUFBSSxrQkFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQy9DO0lBRUssSUFBQSxLQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTlCLEtBQUssUUFBeUIsQ0FBQTtJQUV2QyxJQUFHO1FBQ0MsSUFBTSxPQUFPLEdBQUcscUJBQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFxQixDQUFDLENBQUE7UUFFaEUsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFjLENBQUM7UUFFOUIsT0FBTyxJQUFJLEVBQUUsQ0FBQTtLQUNoQjtJQUFDLFdBQU07UUFDSixNQUFNLElBQUksa0JBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUNoRDtBQUNMLENBQUM7QUF0Qkwsc0NBc0JLIn0=