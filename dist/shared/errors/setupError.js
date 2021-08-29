"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("./AppError"));
exports.default = (function (app) {
    app.use(function (err, request, response, _) {
        if (err instanceof AppError_1.default) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }
        console.error(err);
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXBFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvZXJyb3JzL3NldHVwRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx3REFBa0M7QUFFbEMsbUJBQWUsVUFBQyxHQUFZO0lBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFVLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLENBQWU7UUFDeEUsSUFBSSxHQUFHLFlBQVksa0JBQVEsRUFBRTtZQUMzQixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUMsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxPQUFPO1lBQ2YsT0FBTyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBQSJ9