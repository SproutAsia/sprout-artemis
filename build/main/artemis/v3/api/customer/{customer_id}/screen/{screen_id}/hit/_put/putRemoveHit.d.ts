import { TResRemoveHit } from "./TResRemoveHit";
/**
 * remove hit
 */
export default function putRemoveHit(args: {
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
        match: "TRUE_HIT" | "NO_ACTION" | "FALSE_POSITIVE";
        screeningHitIds: string[];
    };
}): Promise<TResRemoveHit>;
