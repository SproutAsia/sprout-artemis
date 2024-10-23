
import ArtemisHeader from "../../../shared/ArtemisHeader"

import { TResGetUsers } from "./TResGetUsers"


/**
 * get all users in a domain
 * @description get all user in a domain
 */
export default async function getUsers(args: {
    auth: {
        token: string
    },
    filter: {
        offset: number
        paged: boolean
        pageNumber: number
        pageSize: number
        'sort.sorted': boolean
        'sort.unsorted': boolean
        unpaged: boolean
    }
}): Promise<TResGetUsers> {
    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/authentication-manager/user")
    if (args.filter.offset) url.searchParams.append("offset", args.filter.offset.toString())
    if (args.filter.paged) url.searchParams.append("paged", args.filter.paged.toString())
    if (args.filter.pageNumber) url.searchParams.append("pageNumber", args.filter.pageNumber.toString())
    if (args.filter.pageSize) url.searchParams.append("pageSize", args.filter.pageSize.toString())
    if (args.filter['sort.sorted']) url.searchParams.append("sort.sorted", args.filter['sort.sorted'].toString())
    if (args.filter['sort.unsorted']) url.searchParams.append("sort.unsorted", args.filter['sort.unsorted'].toString())
    if (args.filter.unpaged) url.searchParams.append("unpaged", args.filter.unpaged.toString())

    console.log(">>> URL", url.toString())

    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json()) as Promise<TResGetUsers>
        return result
    } catch (e) {
        return e
    }
}