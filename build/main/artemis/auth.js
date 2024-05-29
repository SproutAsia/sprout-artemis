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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcnRlbWlzL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxrQkFBa0I7SUFJM0IsWUFBWSxJQUVYO1FBQ0csSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBRW5CLE1BQU0sTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRXJDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3hCLENBQUM7SUFHRCxRQUFRLENBQUMsSUFHUjtRQUNHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUMsQ0FBQTtRQUUzRCxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFFMUIsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztDQUNKO0FBL0JELGdEQStCQyJ9