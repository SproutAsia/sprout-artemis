import postIndividualCrp from "../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/postIndividualCrp"
import { Member } from "../../grof/types/TGrofApplication"

import ConvertToRequest from "./utils/ConvertToRequest"


/**
 * @description 
 */
export default async function postIndividualCrpFromGrof(args: {
    auth: {
        token: string
    }
    grof: {
        application: {
            company: {
                members: Member
            }
        }
    }
    path: {
        customerId: string
    }
    additional?: Parameters<typeof ConvertToRequest.toSingleIndividualCrp>['0']['additional'],
    customFn?: Parameters<typeof ConvertToRequest.toSingleIndividualCrp>['0']['customFn']
}) {
    return postIndividualCrp({
        auth: args.auth,
        req: ConvertToRequest.toSingleIndividualCrp({
            member: args.grof.application.company.members,
            additional: args.additional,
            customFn: args.customFn
        }),
        path: {
            customerId: args.path.customerId
        }
    })
}