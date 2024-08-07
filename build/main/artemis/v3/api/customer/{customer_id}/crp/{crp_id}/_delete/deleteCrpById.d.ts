import { TResGetCrpById } from "../_get/TResGetCrpById";
/**
 * delete crp by id
 */
export default function deleteCrpById(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
        crpId: string;
    };
}): Promise<TResGetCrpById>;
