import { NextFunction, Request, Response } from "express";
import { ErrorNotifier, STATUSCODE } from "./ErrorNotifier";

const errorField = (err: ErrorNotifier, res: Response) => {
  return res.status(STATUSCODE.BAD).json({
    errorName: err.errorName,
    errorMessage: err.errorMessage,
    errorStatus: err.errorStatus,
    success: err.success,
    stack: err.stack,
    err,
  });
};

export const errorHost = (err: ErrorNotifier, req: Request, res: Response, next: NextFunction) => {
     errorField(err, res)
}
