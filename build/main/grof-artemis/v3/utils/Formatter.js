"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertEnum_1 = __importDefault(require("./ConvertEnum"));
const Formatter = {
    toGrofAddress(args) {
        if (args.country === "SG") {
            const formattedAddress = [
                ConvertEnum_1.default.shortCountry(args.country),
                args.blockHouse,
                args.streetName,
                args.buildingName,
                args.level,
                args.unit,
                args.postalCode
            ].join(", ");
            return [formattedAddress];
        }
        else {
            const addressLine = [];
            if (args.addressLine1)
                addressLine.push(args.addressLine1);
            if (args.addressLine2)
                addressLine.push(args.addressLine2);
            return addressLine;
        }
    }
};
exports.default = Formatter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My91dGlscy9Gb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBZ0Q7QUFFaEQsTUFBTSxTQUFTLEdBQUc7SUFDZCxhQUFhLENBQUMsSUFVYjtRQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdkIsTUFBTSxnQkFBZ0IsR0FBRztnQkFDckIscUJBQW9CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxVQUFVO2dCQUNmLElBQUksQ0FBQyxVQUFVO2dCQUNmLElBQUksQ0FBQyxZQUFZO2dCQUNqQixJQUFJLENBQUMsS0FBSztnQkFDVixJQUFJLENBQUMsSUFBSTtnQkFDVCxJQUFJLENBQUMsVUFBVTthQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNaLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1NBQzVCO2FBQU07WUFDSCxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUE7WUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWTtnQkFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMxRCxJQUFJLElBQUksQ0FBQyxZQUFZO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFELE9BQU8sV0FBVyxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUEifQ==