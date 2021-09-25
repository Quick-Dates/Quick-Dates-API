"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileEnum_1 = require("../enum/ProfileEnum");
var AppError_1 = __importDefault(require("../errors/AppError"));
function student(request, response, next) {
    if (request.user.profile === ProfileEnum_1.ProfileEnum.STUDENT) {
        return next();
    }
    else {
        throw new AppError_1.default("Seu perfil não tem acesso a essa funcionalidade!!!", 401);
    }
}
exports.default = student;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvbWlkZGxld2FyZXMvc3R1ZGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUFrRDtBQUNsRCxnRUFBMEM7QUFFMUMsU0FBd0IsT0FBTyxDQUM3QixPQUFnQixFQUNoQixRQUFrQixFQUNsQixJQUFrQjtJQUVsQixJQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLHlCQUFXLENBQUMsT0FBTyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtTQUFNO1FBQ0wsTUFBTSxJQUFJLGtCQUFRLENBQUMsb0RBQW9ELEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0U7QUFDSCxDQUFDO0FBVkQsMEJBVUMifQ==