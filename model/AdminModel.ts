import mongoose from "mongoose";
import { iAdmin, iAdminData } from "../utils/interface";

 const adminModel = new mongoose.Schema<iAdmin>({
  adminName: {
    type: String,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPassword: {
    type: String,
  },
  adminAvatar: {
    type: String,
  },
  adminAvatarID: {
    type: String,
  },
  subordinate: [{
    type: mongoose.Types.ObjectId,
    ref: "auths"
  }]
}, {timestamps: true});

export default mongoose.model<iAdminData>("admins", adminModel);
