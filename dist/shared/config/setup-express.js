"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = __importDefault(require("cors"));
exports.default = (function (app) {
    app.use(cors_1.default({ origin: 'https://quickdates.tech' }));
    app.use(express_1.json());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvY29uZmlnL3NldHVwLWV4cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBdUM7QUFDdkMsOENBQXVCO0FBRXZCLG1CQUFlLFVBQUMsR0FBWTtJQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FDVixFQUFDLE1BQU0sRUFBRSx5QkFBeUIsRUFBQyxDQUNwQyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxFQUFBIn0=