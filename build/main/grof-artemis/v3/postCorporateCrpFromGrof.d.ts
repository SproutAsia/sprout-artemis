import { Member } from "../../grof/types/TGrofApplication";
/**
 * @description
 */
export default function postCorporateCrpFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        application: {
            company: {
                member: Member;
            };
        };
    };
}): Promise<any>;
