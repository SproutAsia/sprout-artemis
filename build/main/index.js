"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postLogin_1 = __importDefault(require("./artemis/v3/api/authentication/login/_post/postLogin"));
const postCorporateCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postCorporateCrpFromGrof"));
const postCorporateCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postCorporateCustomer.v3"));
const postIndividualCrpFromGrof_1 = __importDefault(require("./grof-artemis/v3/postIndividualCrpFromGrof"));
const postIndividualCustomer_v3_1 = __importDefault(require("./grof-artemis/v3/postIndividualCustomer.v3"));
const ArtemisGrofService = {
    postLogin: postLogin_1.default,
    postCorporateCrpFromGrof: postCorporateCrpFromGrof_1.default,
    postIndividualCrpFromGrof: postIndividualCrpFromGrof_1.default,
    postCorporateCustomerFromGrof: postCorporateCustomer_v3_1.default,
    postIndividualCustomerFromGrof: postIndividualCustomer_v3_1.default
};
exports.default = ArtemisGrofService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzR0FBOEU7QUFDOUUsMEdBQWtGO0FBQ2xGLDBHQUF1RjtBQUN2Riw0R0FBb0Y7QUFDcEYsNEdBQXlGO0FBRXpGLE1BQU0sa0JBQWtCLEdBQUc7SUFDdkIsU0FBUyxFQUFULG1CQUFTO0lBQ1Qsd0JBQXdCLEVBQXhCLGtDQUF3QjtJQUN4Qix5QkFBeUIsRUFBekIsbUNBQXlCO0lBQ3pCLDZCQUE2QixFQUE3QixrQ0FBNkI7SUFDN0IsOEJBQThCLEVBQTlCLG1DQUE4QjtDQUNqQyxDQUFBO0FBRUQsa0JBQWUsa0JBQWtCLENBQUEifQ==