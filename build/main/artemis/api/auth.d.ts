/// <reference types="node" />
export declare class ArtemisAuthService {
    url: string;
    header: Headers;
    constructor(args: {
        url: string;
    });
    getToken(args: {
        username: string;
        password: string;
    }): Promise<unknown>;
}
