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
    assigneeId: string;
    additional?: Parameters<typeof convertToRequest.toCorporateCustomer>[0]['additional'];
    customFn?: Parameters<typeof convertToRequest.toCorporateCustomer>[0]['customFn'];
}): Promise<import("../../artemis/v3/api/customer/_post/corporate/TResPostCustomerCorporate.v3").TResPostCustomerCorporate>;
