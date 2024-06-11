import { Member } from "../../grof/types/TGrofApplication";
/**
 * @description
 */
export default function postIndividualCrpFromGrof(args: {
    auth: {
        token: string;
    };
    grof: {
        application: {
            company: {
                members: Member;
            };
        };
    };
}): Promise<any>;
