import mongoose from "mongoose"
import { iAuth, iAuthData } from "../utils/interface"

const authModel = new mongoose.Schema<iAuth>(
   {
    name: {
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        trim: true
    },
    avatar:{
        type: String
    },
    avatarID: {
        type: String
    },
    task: {
      type: mongoose.Types.ObjectId,
        ref: "tasks"
    },
    admin: 
        {
      type: mongoose.Types.ObjectId,
        ref: "admins"
    }

   }, {timestamps: true}
)

export default mongoose.model<iAuthData>("auths", authModel)