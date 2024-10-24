import { TResPutScreenConclusion } from "./TResPutScreenConclusion";
/**
 * update screening conclusion
 */
export default function putScreenConclusion(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        /**
         * you can get screen customer id from screen summary response screening.id
         */
        screenId: string;
    };
    body: {
        conclusions: Array<"ADVERSE_MEDIA" | "NO_HIT" | "SANCTION" | "PEP" | "OWN_RESTRICTED_LIST">;
    };
}): Promise<TResPutScreenConclusion>;
