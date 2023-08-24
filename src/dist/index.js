"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const envVariables_1 = require("./config/envVariables");
const db_1 = require("./config/db");
const MyAppConnect_1 = require("./MyAppConnect");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = parseInt(envVariables_1.envVariables.PORT);
const app = (0, express_1.default)();
(0, MyAppConnect_1.myAppConnect)(app);
const server = app.listen(process.env.PORT || port, () => {
    (0, db_1.DBConfig)();
});
process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection", reason);
    server.close(() => {
        process.exit(1);
    });
});
