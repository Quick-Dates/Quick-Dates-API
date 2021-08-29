"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
require("express-async-errors");
var setupError_1 = __importDefault(require("./shared/errors/setupError"));
var setup_express_1 = __importDefault(require("./shared/config/setup-express"));
var setup_routes_1 = __importDefault(require("./shared/routes/setup-routes"));
var setup_swagger_1 = __importDefault(require("./shared/config/setup-swagger"));
typeorm_1.createConnection();
var app = express_1.default();
setup_express_1.default(app);
setup_swagger_1.default(app);
setup_routes_1.default(app);
setupError_1.default(app);
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQix5QkFBdUI7QUFFdkIsb0RBQThCO0FBQzlCLG1DQUEyQztBQUMzQyxnQ0FBOEI7QUFFOUIsMEVBQW9EO0FBQ3BELGdGQUF5RDtBQUN6RCw4RUFBdUQ7QUFDdkQsZ0ZBQXlEO0FBR3pELDBCQUFnQixFQUFFLENBQUM7QUFFbkIsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLHVCQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsdUJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixzQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLG9CQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFaEIsa0JBQWUsR0FBRyxDQUFDIn0=