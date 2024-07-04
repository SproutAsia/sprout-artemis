"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * post customer
 * @description STEP 4 : Post Risk Report
 */
async function postRiskReport(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/risk_reports");
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
exports.default = postRiskReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFJpc2tSZXBvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92Mi9hcGkvY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vcmlza19yZXBvcnRzL19wb3N0L3Bvc3RSaXNrUmVwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0E7OztHQUdHO0FBQ1ksS0FBSyxVQUFVLGNBQWMsQ0FBQyxJQVc1QztJQUNHLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7SUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFBO0lBRXBHLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlCLE9BQU87U0FDVixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM1QixPQUFPLE1BQTRCLENBQUE7S0FDdEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxDQUFBO0tBQ1g7QUFDTCxDQUFDO0FBMUJELGlDQTBCQyJ9