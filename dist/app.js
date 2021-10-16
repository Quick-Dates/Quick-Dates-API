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
var protorypes_1 = __importDefault(require("./shared/utils/protorypes"));
typeorm_1.createConnection();
var app = express_1.default();
setup_express_1.default(app);
setup_swagger_1.default(app);
setup_routes_1.default(app);
setupError_1.default(app);
protorypes_1.default();
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQix5QkFBdUI7QUFFdkIsb0RBQThCO0FBQzlCLG1DQUEyQztBQUMzQyxnQ0FBOEI7QUFFOUIsMEVBQW9EO0FBQ3BELGdGQUF5RDtBQUN6RCw4RUFBdUQ7QUFDdkQsZ0ZBQXlEO0FBQ3pELHlFQUFtRDtBQUduRCwwQkFBZ0IsRUFBRSxDQUFDO0FBRW5CLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0Qix1QkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLHVCQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsc0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixvQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLG9CQUFVLEVBQUUsQ0FBQztBQUViLGtCQUFlLEdBQUcsQ0FBQyJ9