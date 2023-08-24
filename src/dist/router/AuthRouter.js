"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../controller/AuthController");
const multer_1 = require("../utils/multer");
const router = express_1.default.Router();
router.route("/register").post(multer_1.upload, AuthController_1.registerUser);
router.route("/sign-in").post(AuthController_1.signInUser);
router.route("/:userID/get-user").get(AuthController_1.getOneUser);
router.route("/get-user").get(AuthController_1.getUsers);
exports.default = router;
