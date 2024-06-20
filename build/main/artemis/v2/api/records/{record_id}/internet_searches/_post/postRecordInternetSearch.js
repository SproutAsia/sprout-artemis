"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * post customer
 * @description STEP 2d : Post Internet Search
 */
async function postRecordInternetSearch(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/internet_searches/?limit=" + args.query.limit);
    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            headers
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = postRecordInternetSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFJlY29yZEludGVybmV0U2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjIvYXBpL3JlY29yZHMve3JlY29yZF9pZH0vaW50ZXJuZXRfc2VhcmNoZXMvX3Bvc3QvcG9zdFJlY29yZEludGVybmV0U2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ1ksS0FBSyxVQUFVLHdCQUF3QixDQUFDLElBYXREO0lBQ0csTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtJQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVqSSxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTztTQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sTUFBc0MsQ0FBQTtLQUNoRDtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUEzQkQsMkNBMkJDIn0=