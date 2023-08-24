"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.readOneTask = exports.readTask = exports.createTask = void 0;
const AuthModel_1 = __importDefault(require("../model/AuthModel"));
const TaskModel_1 = __importDefault(require("../model/TaskModel"));
const ErrorNotifier_1 = require("../error/ErrorNotifier");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { task, priority } = req.body;
        const user = yield AuthModel_1.default.findById(id);
        const tasked = yield TaskModel_1.default.create({
            name: user === null || user === void 0 ? void 0 : user.name,
            task,
            priority,
            taskAvatar: user === null || user === void 0 ? void 0 : user.avatar,
        });
        res.status(ErrorNotifier_1.STATUSCODE.CREATE).json({
            message: "task created",
            data: tasked,
        });
    }
    catch (error) {
        return res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error creating task", data: error.message });
    }
});
exports.createTask = createTask;
const readTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield TaskModel_1.default.find();
        res.status(ErrorNotifier_1.STATUSCODE.OK).json({ message: "task", data: tasked });
    }
    catch (error) {
        res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error reading task", data: error.message });
    }
});
exports.readTask = readTask;
// export const updateOneTask = async (req: Request, res: Response) => {
//   try {
//     const { task, priority , taskStatus } = req.body;
//     const getTask = await TaskModel.findById(req.params.taskId)
//     if(taskStatus === false){
// return res.status(STATUSCODE.BAD).json({
//     message : "To start Task , please move to progess"
// })
//     }else{
//         const tasked = await TaskModel.findByIdAndUpdate(
//             getTask?._id,
//             { task, priority , taskStatus },
//             { new: true }
//           );
//           getTask?.progress?.push(new mongoose.Types.ObjectId(tasked?._id))
//           getTask?.save()
//           res.status(STATUSCODE.OK).json({ message: "task read", data: tasked });
//     }
//   } catch (error: any) {
//     res.status(STATUSCODE.BAD).json({ message: "Error reading task" });
//   }
// };
const readOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield TaskModel_1.default.findById(id);
        res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "reading task ", data: tasked });
    }
    catch (error) {
        res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "Error reading task", data: error.message });
    }
});
exports.readOneTask = readOneTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield TaskModel_1.default.findByIdAndDelete(id);
        res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "task has been deleted", data: tasked });
    }
    catch (error) {
        res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error deleting task ", data: error.message });
    }
});
exports.deleteTask = deleteTask;
