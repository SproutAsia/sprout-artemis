"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArtemisRiskService {
    constructor(args) {
        this.token = args.token;
        this.url = args.url;
        const header = new Headers();
        header.set("Authorization", "Bearer " + args.token);
        header.set("Accept", "application/json");
        header.set("x-artemis-domain", "117");
        this.header = header;
    }
    static init(args) {
        return new ArtemisRiskService({
            token: args.token,
            url: args.url
        });
    }
    async getRiskAssesmentByCustomer(customerId) {
        const url = new URL(this.url + "/api/customers/" + customerId + "/risk_reports/?limit=1");
        console.log(url.toString());
        const result = fetch(url.toString(), {
            headers: this.header
        }).then((res) => res.json());
        return result;
    }
}
exports.default = ArtemisRiskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL2FwaS9yaXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsa0JBQWtCO0lBS25DLFlBQVksSUFHWDtRQUNHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUE7UUFFbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUdYO1FBQ0csT0FBTyxJQUFJLGtCQUFrQixDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7U0FDaEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxVQUFrQjtRQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixHQUFHLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQyxDQUFBO1FBRXpGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFFM0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBdUMsQ0FBQyxDQUFBO1FBRWpFLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQXpDRCxxQ0F5Q0MifQ==