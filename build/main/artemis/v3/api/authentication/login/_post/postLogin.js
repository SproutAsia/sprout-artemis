"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/order */
const ArtemisHeader_1 = __importDefault(require("../../../../shared/ArtemisHeader"));
const CheckMock_1 = __importDefault(require("../../../../shared/CheckMock"));
const res_mock_1 = require("./res.mock");
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
async function postLogin(args) {
    if ((0, CheckMock_1.default)())
        return res_mock_1.ResMockLogin;
    const headers = (0, ArtemisHeader_1.default)();
    const url = new URL(process.env.ARTEMIS_API + "/authentication/login");
    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = postLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdExvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjMvYXBpL2F1dGhlbnRpY2F0aW9uL2xvZ2luL19wb3N0L3Bvc3RMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlDQUFpQztBQUNqQyxxRkFBNEQ7QUFDNUQsNkVBQW9EO0FBR3BELHlDQUF5QztBQUl6Qzs7OztHQUlHO0FBQ1ksS0FBSyxVQUFVLFNBQVMsQ0FBQyxJQUV2QztJQUNHLElBQUksSUFBQSxtQkFBUyxHQUFFO1FBQUUsT0FBTyx1QkFBWSxDQUFBO0lBRXBDLE1BQU0sT0FBTyxHQUFHLElBQUEsdUJBQWEsR0FBRSxDQUFBO0lBQy9CLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLENBQUE7SUFFdEUsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QyxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDOUIsT0FBTztTQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sTUFBNEIsQ0FBQTtLQUN0QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUFsQkQsNEJBa0JDIn0=