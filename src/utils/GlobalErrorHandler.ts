import { Request, Response, NextFunction } from "express";
import { HTTPStatusCode } from "../constants/HttpsConstant";

enum ErrorMessages {
    Internal = "Internal server error",
    Gateway = "Bad gateway error",
    NotFound = "Not found",
    BadRequest = "Bad request",
    defaultError ="Something went wrong"
}
function globalErrorHandler(err: { message: string; statusCode: number; }, req: Request, res: Response, next: NextFunction) {
    
    let status = HTTPStatusCode.InternalServerError;
    let errorMessage = ErrorMessages.defaultError;

    switch (true) {
        case err.message.includes("Internal server error"):
            status = HTTPStatusCode.InternalServerError;
            errorMessage = ErrorMessages.Internal;
            break;
        case err.message.includes("Bad gateway error"):
            status = HTTPStatusCode.BadGateway;
            errorMessage = ErrorMessages.Gateway;
            break;
        case err.message.includes("Not found"):
            status = HTTPStatusCode.NotFound;
            errorMessage = ErrorMessages.NotFound;
            break;
        case err.message.includes("Bad request"):
            status = HTTPStatusCode.BadRequest;
            errorMessage = ErrorMessages.BadRequest;
            break;
        default:
            break;
    }

    res.status(status).json({ error: errorMessage });
}

export default globalErrorHandler;
