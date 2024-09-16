import postCorporateCustomer from "../../artemis/v3/api/customer/_post/corporate/postCorporateCustomer.v3"
import { TGrofApplication } from "../../grof/types/TGrofApplication"

import convertToRequest from "./utils/ConvertToRequest"


/**
 * @description 
 */
export default async function postCorporateCustomerFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: TGrofApplication
    }
    additional?: Parameters<typeof convertToRequest.toCorporateCustomer>[0]['additional'],
    customFn?: Parameters<typeof convertToRequest.toCorporateCustomer>[0]['customFn']
}) {
    const { grof } = args

    return postCorporateCustomer({
        auth: args.auth,
        req: convertToRequest.toCorporateCustomer({
            application: grof.application,
            additional: args.additional,
            customFn: args.customFn
        })
    })
}