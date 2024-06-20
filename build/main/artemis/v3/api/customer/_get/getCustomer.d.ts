import { TResGetCustomer } from "./TResGetCustomer";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function getCustomer(args: {
    auth: {
        token: string;
    };
}): Promise<TResGetCustomer>;
