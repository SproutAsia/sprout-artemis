"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * post customer
 * @description STEP 2g : Get Own Restricted List Search
 */
async function getOwnNameSearch(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/own_name_searches");
    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = getOwnNameSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3duTmFtZVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YyL2FwaS9yZWNvcmRzL3tyZWNvcmRfaWR9L293bl9uYW1lX3NlYXJjaGVzL19nZXQvZ2V0T3duTmFtZVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7R0FHRztBQUNZLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxJQVU5QztJQUNHLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7SUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLENBQUE7SUFFdEcsSUFBSTtRQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QyxPQUFPO1NBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUE4QixDQUFBO0tBQ3hDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQztBQXZCRCxtQ0F1QkMifQ==