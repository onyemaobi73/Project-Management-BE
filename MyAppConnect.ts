import express, { Application, Request, NextFunction, Response } from "express";
import done from "./router/DoneRouter"
import cors from "cors";
import { ErrorNotifier, STATUSCODE } from "./error/ErrorNotifier";
import auth from "./router/AuthRouter";
import progress from "./router/ProgressRouter"
import task from "./router/TaskRouter";
import admin from "./router/AdminRouter";
import { errorHost } from "./error/ErrorHost";

export const myAppConnect = (app: Application) => {
  
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(STATUSCODE.OK).json({ message: "Api is ready!!" });
    } catch (error) {
      return res.status(STATUSCODE.BAD).json({ message: "Error" });
    }
  });
  app.use("/api", auth);
  app.use("/api", task);
  app.use("/api", progress);
  app.use("/api", done);
  app.use("/api", admin)

  app
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      new ErrorNotifier({
        errorName: "URL Error",
        errorMessage: `This error came due to ${req.originalUrl} is wrong `,
        errorStatus: STATUSCODE.BAD,
        success: false,
      });
    })
    .use(errorHost);
};
