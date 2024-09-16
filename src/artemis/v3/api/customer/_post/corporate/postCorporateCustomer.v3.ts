/* eslint-disable import/order */

import ArtemisHeader from "../../../../shared/ArtemisHeader"
import CheckMock from "../../../../shared/CheckMock"

import { ResPostCustomerMock } from "./res.mock"
import { TReqPostCustomerCorporate } from "./TReqPostCustomerCorporate.v3"
import { TResPostCustomerCorporate } from "./TResPostCustomerCorporate.v3"

/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function postCorporateCustomer(args: {
    auth: {
        token: string
    }
    req: TReqPostCustomerCorporate
}) {
    if (CheckMock()) return ResPostCustomerMock

    const headers = ArtemisHeader()
    headers.append("authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer")

    const result = await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify(args.req),
        headers
    }).then(async (res) => {
        return res.json()
    })
    return result as TResPostCustomerCorporate
}