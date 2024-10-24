import { TResGetComment } from "./TResGetComment";
export default function getComment(args: {
    auth: {
        token: string;
    };
    path: {
        hitId?: string;
    };
}): Promise<TResGetComment>;
