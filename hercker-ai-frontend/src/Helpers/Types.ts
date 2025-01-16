export type BasicResponse<T> = {
    ok: boolean;
    message: string;
    data: T | null;
};
