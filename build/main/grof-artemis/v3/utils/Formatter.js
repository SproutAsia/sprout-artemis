"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Formatter = {
    toGrofAddress(args) {
        if (args.country === "SG") {
            const formattedAddress = [
                args.country,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2dyb2YtYXJ0ZW1pcy92My91dGlscy9Gb3JtYXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFNBQVMsR0FBRztJQUNkLGFBQWEsQ0FBQyxJQVViO1FBQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN2QixNQUFNLGdCQUFnQixHQUFHO2dCQUNyQixJQUFJLENBQUMsT0FBTztnQkFDWixJQUFJLENBQUMsVUFBVTtnQkFDZixJQUFJLENBQUMsVUFBVTtnQkFDZixJQUFJLENBQUMsWUFBWTtnQkFDakIsSUFBSSxDQUFDLEtBQUs7Z0JBQ1YsSUFBSSxDQUFDLElBQUk7Z0JBQ1QsSUFBSSxDQUFDLFVBQVU7YUFDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDWixPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtTQUM1QjthQUFNO1lBQ0gsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFBO1lBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVk7Z0JBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDMUQsSUFBSSxJQUFJLENBQUMsWUFBWTtnQkFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUMxRCxPQUFPLFdBQVcsQ0FBQTtTQUNyQjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFBIn0=