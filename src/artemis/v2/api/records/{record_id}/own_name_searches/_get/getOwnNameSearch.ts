import { TResGetOwnNameSearch } from "./TResGetOwnNameSearch"

/**
 * post customer
 * @description STEP 2g : Get Own Restricted List Search
 */
export default async function getOwnNameSearch(args: {
    auth: {
        token: string
    }
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string
    }
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/records/" + args.path.recordId + "/own_name_searches")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json())
        return result as TResGetOwnNameSearch
    } catch (e) {
        return e
    }
}