"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DoneController_1 = require("../controller/DoneController");
const router = (0, express_1.default)();
router.route("/create-done-task").post(DoneController_1.createDoneTask);
router.route("/read-done-task").get(DoneController_1.readDoneTask);
router.route("/:id/read-one-done-task").post(DoneController_1.readOneDoneTask);
router.route("/:id/delete-done-task").delete(DoneController_1.deleteDoneTask);
exports.default = router;
