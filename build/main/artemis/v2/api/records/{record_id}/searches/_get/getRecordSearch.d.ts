/**
 * post customer
 * @description Individual Workflow - STEP 2c : Get Database Screening Result
 * @description Corporate Workflow - STEP 3c : Get Database Screening Result
 */
export default function getRecordSearch(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        recordId: string;
    };
}): Promise<any>;
