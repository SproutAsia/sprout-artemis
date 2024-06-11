/**
 * post customer
 * @description STEP 5 : GET CUSTOMER
 */
export default function getCustomer(args: {
    auth: {
        token: string;
    };
    path: {
        /**
         * can be gained from get customer crps
         */
        customerId: string;
    };
}): Promise<any>;
