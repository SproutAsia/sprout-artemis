
import { TReqLogin } from "../TReqLogin"
import { TResLogin } from "../TResLogin"




/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postLogin(args: {
    req: TReqLogin
}) {
    const headers = new Headers()
    const url = new URL(process.env.ARTEMIS_API + "/authentication/login")

    try {
        const result = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(args.req),
            headers
        }).then((res) => res.json())
        return result as TResLogin
    } catch (e) {
        return e
    }
}