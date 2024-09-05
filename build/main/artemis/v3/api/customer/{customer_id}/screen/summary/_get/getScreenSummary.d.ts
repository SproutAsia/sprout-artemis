import { TResGetScreenSummary } from "./TResGetScreenSummary";
export default function getScreenSummary(args: {
    auth: {
        token: string;
    };
    path: {
        customerId: string;
    };
}): Promise<TResGetScreenSummary>;
