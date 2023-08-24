"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const progressModel = new mongoose_1.default.Schema({
    progressTask: {
        type: String
    },
    progressAvatar: {
        type: String
    },
    progressName: {
        type: String
    },
    progressPriority: {
        type: String
    },
    task: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "tasks"
    },
    done: [
        {
            type: mongoose_1.default.Types.ObjectId,
            ref: "dones"
        }
    ]
}, { timestamps: true });
exports.default = mongoose_1.default.model("progress", progressModel);
