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
_1.default.checkToken({
    auth: {
        token: process.env.ARTEMIS_TOKEN,
    }
}).then((res) => {
    console.log(">>> RES", res.isActive);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUczQiwwQ0FBcUQ7QUFFckQseUNBQWtDO0FBRWxDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFZixNQUFNLE1BQU0sR0FBSSw4QkFBMkMsQ0FBQTtBQUMzRCxVQUFrQixDQUFDLFVBQVUsQ0FBQztJQUMxQixJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0tBQ25DO0NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3hDLENBQUMsQ0FBQyxDQUFBIn0=