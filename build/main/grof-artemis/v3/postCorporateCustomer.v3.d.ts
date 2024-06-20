import { TGrofApplication } from "../../grof/types/TGrofApplication";
import convertToRequest from "./utils/ConvertToRequest";
/**
 * @description
 */
export default function postCorporateCustomerFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        application: TGrofApplication;
    };
    additional?: Parameters<typeof convertToRequest.toCorporateCustomer>[0]['additional'];
}): Promise<any>;
