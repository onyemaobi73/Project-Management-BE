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
exports.deleteProgress = exports.readProgress = exports.createProgress = void 0;
const ProgressModel_1 = __importDefault(require("../model/ProgressModel"));
const ErrorNotifier_1 = require("../error/ErrorNotifier");
const createProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield ProgressModel_1.default.create(req.body);
        return res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "progress has been made in the task", data: tasked });
    }
    catch (error) {
        return res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error creting progress", data: error.message });
    }
});
exports.createProgress = createProgress;
const readProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield ProgressModel_1.default.find().populate({
            path: "progress",
            options: {
                sort: {
                    createdAt: -1,
                },
            },
        });
        return res
            .status(ErrorNotifier_1.STATUSCODE.OK)
            .json({ message: "reading progress", data: tasked });
    }
    catch (error) {
        return res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error reading progress" });
    }
});
exports.readProgress = readProgress;
const deleteProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield ProgressModel_1.default.findByIdAndDelete(id);
        return res
            .status(ErrorNotifier_1.STATUSCODE.OK)
            .json({ message: "task deleted", data: tasked });
    }
    catch (error) {
        return res
            .status(ErrorNotifier_1.STATUSCODE.BAD)
            .json({ message: "Error deleting progress" });
    }
});
exports.deleteProgress = deleteProgress;
// export const updateOneProgress = async (req: Request, res: Response) => {
//   try {
//     const { progressTask, progressPriority, progressStatus } = req.body;
//     const getProgress = await TaskModel.findById(req.params.taskID);
//     if (progressStatus === false) {
//       return res
//         .status(STATUSCODE.BAD)
//         .json({ message: "Progress Completed, move to done" });
//     } else {
//       const progress = await TaskModel.findByIdAndUpdate(
//         getProgress?._id,
//         {
//           progressTask: getProgress?.task,
//           progressPriority: getProgress?.priority,
//           progressStatus,
//         },
//         { new: true }
//       );
//       getProgress?.progress.push(new mongoose.Types.ObjectId(progress?._id));
//       getProgress?.save();
//       res
//         .status(STATUSCODE.OK)
//         .json({ message: "progress read", data: progress });
//     }
//   } catch (error) {
//     res.status(STATUSCODE.BAD).json({ message: "Error reading progress" });
//   }
// };
// export const readProgressDetail = async(req: Request, res: Response) =>{
//     try {
//         const { id } = req.params;
//         const tasked = await ProgressModel.findById(id).populate({
//             path: "step",
//             options: {
//                 sort: { createdAt: 1 },
//             }
//         })
//         return res.status(STATUSCODE.OK).json({message: "reading task", data: tasked})
//     } catch (error) {
//         return res.status(STATUSCODE.BAD).json({message: "Error reading progress"})
//     }
// }
