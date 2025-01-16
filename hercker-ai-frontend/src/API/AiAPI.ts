import { AxiosError } from "axios";
import { $host } from ".";
import { getLocalAccessToken } from "../Helpers/LocalStorage";
import { BasicResponse } from "../Helpers/Types";

export const validateCode = async (code: string): Promise<BasicResponse<string> | boolean> => {
    try {
        const { data } = await $host.post(
            "/ask/validate",
            {
                code,
            },
            {
                headers: {
                    Authorization: getLocalAccessToken(),
                },
            }
        );

        if (data?.result) {
            return { ok: true, message: "got response", data: data.result };
        }
        return {
            ok: false,
            message: "can't get data",
            data: null,
        };
    } catch (e: unknown) {
        let message = "Some error";
        if (e instanceof AxiosError && e.response) {
            if (e.response.status === 403) {
                return true;
            }

            if (e.response?.data.message === "no whitelist") {
                message = "You are not in whitelist";
            }
            return { ok: false, message, data: null };
        }
        return { ok: false, message, data: null };
    }
};

export const generateCode = async (message: string, isNew: boolean): Promise<BasicResponse<string> | boolean> => {
    try {
        const { data } = await $host.post(
            "/ask/generate",
            {
                request: message,
                isNew,
            },
            {
                headers: {
                    Authorization: getLocalAccessToken(),
                },
            }
        );

        if (data?.result) {
            return { ok: true, message: "got response", data: data.result };
        }
        return {
            ok: false,
            message: "can't generate data",
            data: null,
        };
    } catch (e: unknown) {
        let message = "Some error";
        if (e instanceof AxiosError && e.response) {
            if (e.response.status === 403) {
                return true;
            }

            if (e.response?.data.message === "no whitelist") {
                message = "You are not in whitelist";
            }
            return { ok: false, message, data: null };
        }
        return { ok: false, message, data: null };
    }
};
