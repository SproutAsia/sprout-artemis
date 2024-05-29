"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArtemisCustomerService {
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
        return new ArtemisCustomerService({
            token: args.token,
            url: args.url
        });
    }
    async getCustomerList(args) {
        const url = new URL(this.url + "/api/customers/");
        if (args.limit)
            url.searchParams.set('limit', args.limit.toString());
        console.log(url.toString());
        const result = fetch(url.toString(), {
            headers: this.header
        }).then((res) => res.json());
        return result;
    }
}
exports.default = ArtemisCustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy9hcGkvY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFxQixzQkFBc0I7SUFLdkMsWUFBWSxJQUdYO1FBQ0csSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUVuQixNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRXJDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBR1g7UUFDRyxPQUFPLElBQUksc0JBQXNCLENBQUM7WUFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNoQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUVyQjtRQUNHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBQTtRQUNqRCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUVwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTNCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQW1DLENBQUMsQ0FBQTtRQUU3RCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUE1Q0QseUNBNENDIn0=