import { TGrofOrganization } from "../../grof/types/TGrofOrganization";
/**
 * @description
 */
export default function postCustomerFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        organization: TGrofOrganization;
    };
}): Promise<any>;
