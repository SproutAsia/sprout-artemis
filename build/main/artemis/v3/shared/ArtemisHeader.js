"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArtemisHeader() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Origin", process.env.ARTEMIS_ORIGIN);
    headers.append("x-domain-id", process.env.ARTEMIS_DOMAIN_ID);
    return headers;
}
exports.default = ArtemisHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0ZW1pc0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YzL3NoYXJlZC9BcnRlbWlzSGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBd0IsYUFBYTtJQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO0lBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7SUFDbEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNwRCxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFFNUQsT0FBTyxPQUFPLENBQUE7QUFDbEIsQ0FBQztBQVBELGdDQU9DIn0=