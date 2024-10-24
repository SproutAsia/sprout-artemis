/* eslint-disable import/order */

import ArtemisHeader from "../../../shared/ArtemisHeader"
import CheckMock from "../../../shared/CheckMock"

import { ResGetCustomerMock } from "./res.mock"
import { TResGetCustomer } from "./TResGetCustomer"


/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default async function getCustomer(args: {
    auth: {
        token: string
    },
    filter: {
        customerStatus?: string
        customerType?: "INDIVIDUAL" | "CORPORATE"
        referenceId?: string
        riskRating?: string
        searchString?: string
    }
    pagination?: {
        size: number
        page: number
    }
}): Promise<TResGetCustomer> {
    // MOCK MODE
    if (CheckMock()) return ResGetCustomerMock

    const headers = ArtemisHeader()
    headers.append("Authorization", "Bearer " + args.auth.token)
    const url = new URL(process.env.ARTEMIS_API + "/customer")
    if (args.filter.customerStatus) url.searchParams.append("customerStatusList", args.filter.customerStatus)
    if (args.filter.customerType) url.searchParams.append("customerTypeList[0]", args.filter.customerType)
    if (args.filter.referenceId) url.searchParams.append("referenceId", args.filter.referenceId)
    if (args.filter.riskRating) url.searchParams.append("riskRatingList", args.filter.riskRating)
    if (args.filter.searchString) url.searchParams.append("searchString", args.filter.searchString)
    if (args.pagination.size) url.searchParams.append("size", args.pagination?.size.toString())
    if (args.pagination.page) url.searchParams.append("page", args.pagination?.page.toString())


    const response = await fetch(url.toString(), { headers });
    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        console.error(`Response body: ${text}`);
    }
    const result = await response.json();
    return result as Promise<TResGetCustomer>
}