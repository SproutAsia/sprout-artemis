import { TResGetMe } from "./TResGetMe";
/**
 * to check token
 */
export default function getMe(args: {
    auth: {
        token: string;
    };
    filter: {
        customerStatus?: string;
        customerType?: "INDIVIDUAL" | "CORPORATE";
        referenceId?: string;
        riskRating?: string;
        searchString?: string;
    };
}): Promise<TResGetMe>;
