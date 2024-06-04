import { TReqAuthRefreshToken } from "./TReqAuthRefreshToken"
import { TResAuthRefreshToken } from "./TResAuthRefreshToken"

/**
 * @description get new token from artemis
 */
export default async function postRefreshToken(args: {
    auth: {
        token: string
    }
    req: TReqAuthRefreshToken
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
        return result as TResAuthRefreshToken
    } catch (e) {
        return e
    }
}