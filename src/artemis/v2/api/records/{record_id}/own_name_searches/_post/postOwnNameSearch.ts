import { TReqPostOwnNameSearch } from "./TReqPostOwnNameSearch"
import { TResPostOwnNameSearch } from "./TResPostOwnNameSearch"


/**
 * post customer
 * @description STEP 2f : Post Own Restricted List Search
 */
export default async function postOwnNameSearch(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string
    }
    req: TReqPostOwnNameSearch
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/own_name_searches")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResPostOwnNameSearch
    } catch (e) {
        return e
    }
}