"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controller/TaskController");
const router = (0, express_1.default)();
router.route("/:id/create-task").post(TaskController_1.createTask);
router.route("/read-task").get(TaskController_1.readTask);
router.route("/:id/read-one-task").get(TaskController_1.readOneTask);
router.route("/:id/delete-task").delete(TaskController_1.deleteTask);
exports.default = router;
