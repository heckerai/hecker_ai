import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../helpers/Interfaces";
import { ApiError } from "../error/ApiError";
import OpenAiService from "../services/OpenAiService";

class AskController {
    validateCode = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        try {
            const { code } = req.body;
            if (!code) {
                return next(ApiError.badRequest("no code was provided"));
            }

            const result = await OpenAiService.validateCode(code);
            return res.json({ result });
        } catch (e: any) {
            console.error("AskController validateCode error:", e.message);
            next(ApiError.badRequest(e.message));
        }
    };

    generateCode = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        try {
            const { request, isNew } = req.body;
            const adddress = req.userPayload?.address;
            if (!request) {
                return next(ApiError.badRequest("no request was provided"));
            }
            if (!adddress) {
                return next(ApiError.badRequest("no address was provided"));
            }

            const result = await OpenAiService.generateCode(request, adddress, isNew);
            return res.json({ result });
        } catch (e: any) {
            console.error("AskController generateCode error:", e.message);
            next(ApiError.badRequest(e.message));
        }
    };
}

export default new AskController();
