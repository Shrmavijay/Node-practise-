import { Request, Response, NextFunction } from "express";

const globalRequestHandler = (
  operation: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await operation(req, res, next);
    } catch (err) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  };
};

export default globalRequestHandler;
