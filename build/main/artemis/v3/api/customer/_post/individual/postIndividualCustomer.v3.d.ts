import { TReqPostCustomerIndividual } from "./TReqPostCustomerIndividual.v3";
/**
 * post customer
 * @description Individual Workflow - STEP 1 : create customer
 * @description Corporate Workflow - STEP 1 : create customer
 */
export default function postIndividualCustomer(args: {
    auth: {
        token: string;
    };
    req: TReqPostCustomerIndividual;
}): Promise<any>;
