"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtemisAuthService = void 0;
class ArtemisAuthService {
    constructor(args) {
        this.url = args.url;
        const header = new Headers();
        header.set("Accept", "application/json");
        header.set("x-artemis-domain", "117");
        this.header = header;
    }
    getToken(args) {
        const url = new URL(this.url + "/api/authentication/login");
        const result = fetch(url, {
            method: "POST",
            headers: this.header,
            body: JSON.stringify(args)
        }).then(res => res.json());
        return result;
    }
}
exports.ArtemisAuthService = ArtemisAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL2FwaS9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsa0JBQWtCO0lBSTNCLFlBQVksSUFFWDtRQUNHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUVuQixNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBR0QsUUFBUSxDQUFDLElBR1I7UUFDRyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUE7UUFFM0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBRTFCLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7Q0FDSjtBQS9CRCxnREErQkMifQ==