"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileEnum_1 = require("../enum/ProfileEnum");
var AppError_1 = __importDefault(require("../errors/AppError"));
function teacher(request, response, next) {
    if (request.user.profile === ProfileEnum_1.ProfileEnum.TEACHER) {
        return next();
    }
    else {
        throw new AppError_1.default("Seu perfil não tem acesso a essa funcionalidade!!!", 401);
    }
}
exports.default = teacher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvbWlkZGxld2FyZXMvdGVhY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUFrRDtBQUNsRCxnRUFBMEM7QUFFMUMsU0FBd0IsT0FBTyxDQUM3QixPQUFnQixFQUNoQixRQUFrQixFQUNsQixJQUFrQjtJQUVsQixJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLHlCQUFXLENBQUMsT0FBTyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtTQUFNO1FBQ0wsTUFBTSxJQUFJLGtCQUFRLENBQUMsb0RBQW9ELEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7QUFDSCxDQUFDO0FBVkQsMEJBVUMifQ==