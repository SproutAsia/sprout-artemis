import { TReqPostCorporateCrp } from "../_post/corporate/TReqPostCorporateCrp.v3";
import { TResPostIndividualCrp } from "../_post/individual/TResPostIndividualCrp.v3";
import { TResPutCrp } from "./TResPutCrp";
/**
 * put CRP
 */
export default function putCrp(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        crpId: string;
    };
    body: TReqPostCorporateCrp | TResPostIndividualCrp;
}): Promise<TResPutCrp>;
