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
exports.member = exports.viewAdmin = exports.signInAdmin = exports.registerAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const AdminModel_1 = __importDefault(require("../model/AdminModel"));
const AuthModel_1 = __importDefault(require("../model/AuthModel"));
const ErrorNotifier_1 = require("../error/ErrorNotifier");
const mongoose_1 = __importDefault(require("mongoose"));
const registerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { adminName, adminEmail, adminPassword } = req.body;
        const slat = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(adminPassword, slat);
        const { secure_url, public_id } = yield cloudinary_1.default.uploader.upload((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
        const user = yield AdminModel_1.default.create({
            adminName,
            adminEmail,
            adminPassword: hashed,
            adminAvatar: secure_url,
            adminAvatarID: public_id,
        });
        return res
            .status(ErrorNotifier_1.STATUSCODE.CREATE)
            .json({ message: "user created", data: user });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
    }
});
exports.registerAdmin = registerAdmin;
const signInAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adminEmail, adminPassword } = req.body;
        const admin = yield AdminModel_1.default.findOne({ adminEmail });
        if (admin) {
            const hashed = yield bcrypt_1.default.compare(adminPassword, admin === null || admin === void 0 ? void 0 : admin.adminPassword);
            if (hashed) {
                return res.status(ErrorNotifier_1.STATUSCODE.CREATE).json({
                    message: `welcome back ${admin.adminName}`,
                    data: admin._id,
                });
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
exports.signInAdmin = signInAdmin;
const viewAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield AdminModel_1.default.find();
        return res
            .status(ErrorNotifier_1.STATUSCODE.OK)
            .json({ message: "view admin", data: admin });
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error" });
    }
});
exports.viewAdmin = viewAdmin;
// export const updateAdmin = async (req:Request, res:Response)=>{
//     try {
//         const {adminName, adminPassword} = req.body
//             const admin  = await AdminModel.find()
//             return res.status(STATUSCODE.OK).json({ message:"view admin", data:admin})
//     } catch (error) {
//         return res.status(STATUSCODE.BAD).json({message:"Error"})
//     }
// }
const member = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { adminID, userID } = req.params;
        const admins = yield AdminModel_1.default.findById(adminID);
        const user = yield AuthModel_1.default.findById(userID);
        if (user) {
            yield ((_b = user.subordinate) === null || _b === void 0 ? void 0 : _b.push(new mongoose_1.default.Types.ObjectId(userID)));
            user.save();
            return res.status(ErrorNotifier_1.STATUSCODE.CREATE).json({ message: `You are now a member of ${admins.adminName} team` });
        }
        else {
            return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Something went wrong" });
        }
    }
    catch (error) {
        return res.status(ErrorNotifier_1.STATUSCODE.BAD).json({ message: "Error creating friends" });
    }
});
exports.member = member;
