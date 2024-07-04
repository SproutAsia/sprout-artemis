"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sample_1 = require("./test/sample");
const _1 = __importDefault(require("."));
dotenv_1.default.config();
const sample = sample_1.SampleCorporateMember;
_1.default.getCrpProfile({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    },
    filter: {
        customerType: "INDIVIDUAL",
        customerId: "18",
        searchString: "kim"
    }
}).then((res) => {
    console.log(">>> RES", JSON.stringify(res, null, 2));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUczQiwwQ0FBcUQ7QUFFckQseUNBQWtDO0FBRWxDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFZixNQUFNLE1BQU0sR0FBSSw4QkFBMkMsQ0FBQTtBQUMzRCxVQUFrQixDQUFDLGFBQWEsQ0FBQztJQUM3QixJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0tBQ25DO0lBQ0QsTUFBTSxFQUFFO1FBQ0osWUFBWSxFQUFFLFlBQVk7UUFDMUIsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLEtBQUs7S0FDdEI7Q0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN4RCxDQUFDLENBQUMsQ0FBQSJ9