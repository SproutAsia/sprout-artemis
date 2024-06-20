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
_1.default.postCorporateCrpFromGrof({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    },
    grof: {
        application: {
            company: {
                member: sample
            }
        }
    },
    path: {
        customerId: "13"
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUczQiwwQ0FBcUQ7QUFFckQseUNBQWtDO0FBRWxDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFZixNQUFNLE1BQU0sR0FBSSw4QkFBMkMsQ0FBQTtBQUMzRCxVQUFrQixDQUFDLHdCQUF3QixDQUFDO0lBQ3hDLElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7S0FDbkM7SUFDRCxJQUFJLEVBQUU7UUFDRixXQUFXLEVBQUU7WUFDVCxPQUFPLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLE1BQU07YUFDakI7U0FDSjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsVUFBVSxFQUFFLElBQUk7S0FDbkI7Q0FDSixDQUFDLENBQUEifQ==