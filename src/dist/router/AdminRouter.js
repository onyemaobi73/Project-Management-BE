"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AdminController_1 = require("../controller/AdminController");
const multer_1 = require("../utils/multer");
const router = (0, express_1.default)();
router.route("/register-admin").post(multer_1.upload, AdminController_1.registerAdmin);
router.route("/signin-admin").post(AdminController_1.signInAdmin);
router.route("/view-admin").get(AdminController_1.viewAdmin);
router.route("/:adminID/:userID/a-member").get(AdminController_1.member);
exports.default = router;
