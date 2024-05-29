"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHelloArtemis = exports.ArtemisToGrof = exports.ArtemisRiskService = exports.ArtemisCustomerService = exports.ArtemisAuthService = void 0;
const auth_1 = require("./artemis/api/auth");
Object.defineProperty(exports, "ArtemisAuthService", { enumerable: true, get: function () { return auth_1.ArtemisAuthService; } });
const customer_1 = __importDefault(require("./artemis/api/customer"));
exports.ArtemisCustomerService = customer_1.default;
const risk_1 = __importDefault(require("./artemis/api/risk"));
exports.ArtemisRiskService = risk_1.default;
const ArtemisToGrof_1 = __importDefault(require("./lib/artemis/ArtemisToGrof"));
exports.ArtemisToGrof = ArtemisToGrof_1.default;
const sayHello_1 = require("./lib/sample/sayHello");
Object.defineProperty(exports, "sayHelloArtemis", { enumerable: true, get: function () { return sayHello_1.sayHelloArtemis; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkNBQXdEO0FBTy9DLG1HQVBBLHlCQUFrQixPQU9BO0FBTjNCLHNFQUE0RDtBQU0vQixpQ0FOdEIsa0JBQXNCLENBTXNCO0FBTG5ELDhEQUFvRDtBQUtDLDZCQUw5QyxjQUFrQixDQUs4QztBQUp2RSxnRkFBd0Q7QUFJaUIsd0JBSmxFLHVCQUFhLENBSWtFO0FBRnRGLG9EQUF3RDtBQUVnQyxnR0FGL0UsMEJBQWUsT0FFK0UifQ==