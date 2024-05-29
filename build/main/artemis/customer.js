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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXJ0ZW1pcy9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQXFCLHNCQUFzQjtJQUt2QyxZQUFZLElBR1g7UUFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBRW5CLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFHWDtRQUNHLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQztZQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2hCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLElBRXJCO1FBQ0csTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pELElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFFM0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBbUMsQ0FBQyxDQUFBO1FBRTdELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQTVDRCx5Q0E0Q0MifQ==