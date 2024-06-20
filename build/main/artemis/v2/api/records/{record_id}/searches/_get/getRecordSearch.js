"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * post customer
 * @description Individual Workflow - STEP 2c : Get Database Screening Result
 * @description Corporate Workflow - STEP 3c : Get Database Screening Result
 */
async function getRecordSearch(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/searches");
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
exports.default = getRecordSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmVjb3JkU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvdjIvYXBpL3JlY29yZHMve3JlY29yZF9pZH0vc2VhcmNoZXMvX2dldC9nZXRSZWNvcmRTZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztHQUlHO0FBQ1ksS0FBSyxVQUFVLGVBQWUsQ0FBQyxJQVU3QztJQUNHLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7SUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFBO0lBRTdGLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTztTQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sTUFBNkIsQ0FBQTtLQUN2QztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUF2QkQsa0NBdUJDIn0=