import { TReqAuthToken } from "./TReqAuthToken";
/**
 * @description get token from artemis
 */
export default function postAuthToken(args: {
    auth: {
        token: string;
    };
    req: TReqAuthToken;
}): Promise<any>;
