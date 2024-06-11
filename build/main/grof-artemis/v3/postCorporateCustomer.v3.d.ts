import { TGrofApplication } from "../../grof/types/TGrofApplication";
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
}): Promise<any>;
