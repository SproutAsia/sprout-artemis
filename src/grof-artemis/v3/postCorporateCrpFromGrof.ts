import postCorporateCrp from "../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/postCorporateCrp"
import { Member } from "../../grof/types/TGrofApplication"

import ConvertToRequest from "./utils/ConvertToRequest"


/**
 * @description 
 */
export default async function postCorporateCrpFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: {
            company: {
                member: Member
            }
        }
    }
    path: {
        customerId: string
    }
    additional?: Parameters<typeof ConvertToRequest.toSingleCorporateCrp>['0']['additional'],
    customFn?: Parameters<typeof ConvertToRequest.toSingleCorporateCrp>['0']['customFn']
}) {
    const { member } = args.grof.application.company

    return postCorporateCrp({
        auth: args.auth,
        req: ConvertToRequest.toSingleCorporateCrp({
            member: member,
            additional: args.additional,
            customFn: args.customFn
        }),
        path: {
            customerId: args.path.customerId
        }
    })
}