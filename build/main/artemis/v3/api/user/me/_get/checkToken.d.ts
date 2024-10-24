/**
 * to check token
 */
export default function checkToken(args: {
    auth: {
        token: string;
    };
}): Promise<{
    isActive: true;
    user: unknown;
} | {
    isActive: boolean;
    user: any;
}>;
