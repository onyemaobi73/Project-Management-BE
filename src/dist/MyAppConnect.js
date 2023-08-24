"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAppConnect = void 0;
const express_1 = __importDefault(require("express"));
const DoneRouter_1 = __importDefault(require("./router/DoneRouter"));
const cors_1 = __importDefault(require("cors"));
const ErrorNotifier_1 = require("./error/ErrorNotifier");
const AuthRouter_1 = __importDefault(require("./router/AuthRouter"));
const ProgressRouter_1 = __importDefault(require("./router/ProgressRouter"));
const TaskRouter_1 = __importDefault(require("./router/TaskRouter"));
const AdminRouter_1 = __importDefault(require("./router/AdminRouter"));
const ErrorHost_1 = require("./error/ErrorHost");
const myAppConnect = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    }));
    app.get("/", (req, res) => {
        try {
            return res.status(ErrorNotifier_1.STATUSCODE.OK).json({ message: "Api is ready!!" });
        }
        catch (error) {
            return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
        }
    });
    app.use("/api", AuthRouter_1.default);
    app.use("/api", TaskRouter_1.default);
    app.use("/api", ProgressRouter_1.default);
    app.use("/api", DoneRouter_1.default);
    app.use("/api", AdminRouter_1.default);
    app
        .all("*", (req, res, next) => {
        new ErrorNotifier_1.ErrorNotifier({
            errorName: "URL Error",
            errorMessage: `This error came due to ${req.originalUrl} is wrong `,
            errorStatus: ErrorNotifier_1.STATUSCODE.BAD,
            success: false,
        });
    })
        .use(ErrorHost_1.errorHost);
};
exports.myAppConnect = myAppConnect;
