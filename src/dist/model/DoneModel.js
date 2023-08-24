"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DoneModel = new mongoose_1.default.Schema({
    doneName: {
        type: String
    },
    doneAvatar: {
        type: String
    },
    doneTask: {
        type: String
    },
    donePriority: {
        type: String
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("dones", DoneModel);
