"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const envVariables_1 = require("./envVariables");
const URL = envVariables_1.envVariables.DB;
const DBConfig = () => {
    mongoose_1.default.connect(URL).then(() => {
        console.log("connected!!!");
    });
};
exports.DBConfig = DBConfig;
