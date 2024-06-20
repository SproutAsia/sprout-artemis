import { TReqAuthToken } from "./TReqAuthToken"
import { TResAuthToken } from "./TResAuthToken"


/**
 * @description get token from artemis
 */
export default async function postAuthToken(args: {
    auth: {
        token: string
    }
    req: TReqAuthToken
}) {
    const headers = new Headers()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/auth/token/")

    // TODO: this one using form data
    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResAuthToken
    } catch (e) {
        return e
    }
}