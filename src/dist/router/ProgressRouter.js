"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProgressController_1 = require("../controller/ProgressController");
const router = (0, express_1.default)();
router.route("/create-progress").post(ProgressController_1.createProgress);
router.route("/view-progress").get(ProgressController_1.readProgress);
router.route("/:id/delete-progress").delete(ProgressController_1.deleteProgress);
exports.default = router;
