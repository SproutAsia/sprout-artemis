"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description get token from artemis
 */
async function postAuthToken(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/auth/token/");
    // TODO: this one using form data
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
exports.default = postAuthToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdEF1dGhUb2tlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcnRlbWlzL3YyL2FwaS9hdXRoL3Rva2VuL19wb3N0L3Bvc3RBdXRoVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTs7R0FFRztBQUNZLEtBQUssVUFBVSxhQUFhLENBQUMsSUFLM0M7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO0lBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFBO0lBRTdELGlDQUFpQztJQUNqQyxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM5QixPQUFPO1NBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUF1QixDQUFBO0tBQ2pDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQztBQXJCRCxnQ0FxQkMifQ==