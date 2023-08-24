"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminModel = new mongoose_1.default.Schema({
    adminName: {
        type: String,
    },
    adminEmail: {
        type: String,
        required: true,
    },
    adminPassword: {
        type: String,
    },
    adminAvatar: {
        type: String,
    },
    adminAvatarID: {
        type: String,
    },
    subordinate: [{
            type: mongoose_1.default.Types.ObjectId,
            ref: "auths"
        }]
}, { timestamps: true });
exports.default = mongoose_1.default.model("admins", adminModel);
