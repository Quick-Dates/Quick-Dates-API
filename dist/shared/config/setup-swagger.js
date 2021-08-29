"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_ui_express_1 = require("swagger-ui-express");
var no_cache_1 = require("../middlewares/no-cache");
var docs_1 = __importDefault(require("../docs"));
exports.default = (function (app) {
    app.use('/api-docs', no_cache_1.noCache, swagger_ui_express_1.serve, swagger_ui_express_1.setup(docs_1.default));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtc3dhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvY29uZmlnL3NldHVwLXN3YWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBa0Q7QUFDbEQsb0RBQWtEO0FBQ2xELGlEQUFvQztBQUVwQyxtQkFBZSxVQUFDLEdBQVk7SUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsa0JBQU8sRUFBRSwwQkFBSyxFQUFFLDBCQUFLLENBQUMsY0FBYSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDLEVBQUEifQ==