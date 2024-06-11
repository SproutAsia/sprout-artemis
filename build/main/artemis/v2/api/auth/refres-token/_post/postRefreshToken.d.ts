import { TReqAuthRefreshToken } from "./TReqAuthRefreshToken";
/**
 * @description get new token from artemis
 */
export default function postRefreshToken(args: {
    auth: {
        token: string;
    };
    req: TReqAuthRefreshToken;
}): Promise<any>;
