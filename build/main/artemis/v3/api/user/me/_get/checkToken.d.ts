/**
 * to check token
 */
export default function checkToken(args: {
    auth: {
        token: string;
    };
}): Promise<{
    isActive: boolean;
}>;
