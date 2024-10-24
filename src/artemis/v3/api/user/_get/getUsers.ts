
import ArtemisHeader from "../../../shared/ArtemisHeader"

import { TResGetUsers } from "./TResGetUsers"


/**
 * get all users in a domain
 * @description get all user in a domain
 */
export default async function getUsers(args: {
    auth: {
        token: string
    }
}): Promise<TResGetUsers> {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/authentication-manager/user?page=0&size=1000&isActive=true&sort=updatedAt%2Cdesc&direction=desc")

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json()) as Promise<TResGetUsers>
        return result
    } catch (e) {
        return e
    }
}