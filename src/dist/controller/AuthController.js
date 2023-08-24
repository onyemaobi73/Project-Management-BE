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
exports.getOneUser = exports.getUsers = exports.signInUser = exports.registerUser = void 0;
const AuthModel_1 = __importDefault(require("../model/AuthModel"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ErrorNotifier_1 = require("../error/ErrorNotifier");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const { secure_url, public_id } = yield cloudinary_1.default.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
        const user = yield AuthModel_1.default.create({
            name,
            email,
            password: hashed,
            avatar: secure_url,
            avatarID: public_id,
        });
        return res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "user created", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error", data: error.message });
    }
});
exports.registerUser = registerUser;
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield AuthModel_1.default.findOne({ email });
        if (user) {
            const hashed = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (hashed) {
                return res
                    .status(ErrorNotifier_1.STATUSCODE.CREATE)
                    .json({ message: `welcome back ${user.name}`, data: user._id });
            }
            else {
                return res
                    .status(ErrorNotifier_1.STATUSCODE.BAD)
                    .json({ message: "password is not correct" });
            }
        }
        else {
            return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
        }
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
    }
});
exports.signInUser = signInUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield AuthModel_1.default.find();
        return res
            .status(ErrorNotifier_1.STATUSCODE.OK)
            .json({ message: "get all user", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
    }
});
exports.getUsers = getUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield AuthModel_1.default.findById(userID);
        return res
            .status(ErrorNotifier_1.STATUSCODE.OK)
            .json({ message: "get all user", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
    }
});
exports.getOneUser = getOneUser;
