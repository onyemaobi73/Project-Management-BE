"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const envVariables_1 = require("../config/envVariables");
cloudinary_1.v2.config({
    cloud_name: envVariables_1.envVariables.ClOUD_NAME,
    api_key: envVariables_1.envVariables.CLOUD_KEY,
    api_secret: envVariables_1.envVariables.CLOUD_SECRET,
    secure: true,
});
exports.default = cloudinary_1.v2;
