"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertEnum_1 = __importDefault(require("./ConvertEnum"));
const Formatter = {
    toGrofAddress(args) {
        if (args.country === "SG") {
            return [ConvertEnum_1.default.toSingaporeAddress({
                    blockHouse: args.blockHouse,
                    streetName: args.streetName,
                    buildingName: args.buildingName,
                    level: args.level,
                    unit: args.unit,
                    postalCode: args.postalCode
                })];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My91dGlscy9Gb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBZ0Q7QUFFaEQsTUFBTSxTQUFTLEdBQUc7SUFDZCxhQUFhLENBQUMsSUFVYjtRQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxDQUFDLHFCQUFvQixDQUFDLGtCQUFrQixDQUFDO29CQUM1QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtvQkFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQzlCLENBQUMsQ0FBQyxDQUFBO1NBQ047YUFBTTtZQUNILE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQTtZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZO2dCQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQzFELElBQUksSUFBSSxDQUFDLFlBQVk7Z0JBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDMUQsT0FBTyxXQUFXLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUVELGtCQUFlLFNBQVMsQ0FBQSJ9