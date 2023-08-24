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
exports.deleteDoneTask = exports.readOneDoneTask = exports.readDoneTask = exports.createDoneTask = void 0;
const DoneModel_1 = __importDefault(require("../model/DoneModel"));
const ErrorNotifier_1 = require("../error/ErrorNotifier");
const createDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const done = yield DoneModel_1.default.create(req.body);
        return res.status(ErrorNotifier_1.STATUSCODE.CREATE).json({ message: "done has been created", data: done });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "unable to create done", data: error.message });
    }
});
exports.createDoneTask = createDoneTask;
const readDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield DoneModel_1.default.find();
        return res.status(ErrorNotifier_1.STATUSCODE.OK).json({ message: "reading done users", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error reading users", data: error.message });
    }
});
exports.readDoneTask = readDoneTask;
const readOneDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield DoneModel_1.default.findById(id);
        return res.status(ErrorNotifier_1.STATUSCODE.CREATE).json({ messsage: "reading on done users", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error reading one user", data: error.message });
    }
});
exports.readOneDoneTask = readOneDoneTask;
const deleteDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = DoneModel_1.default.findById(id);
        return res.status(ErrorNotifier_1.STATUSCODE.OK).json({ message: "Done task has been deleted", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Unable to delete done task", data: error.message });
    }
});
exports.deleteDoneTask = deleteDoneTask;
