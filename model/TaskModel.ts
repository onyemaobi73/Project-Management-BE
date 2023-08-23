import mongoose from "mongoose";
import { iTaskData } from "../utils/interface";

const taskModel = new mongoose.Schema({
    name: {
        type: String
    },
    taskAvatar: {
        type: String
    },
    task: {
        type: String,
        ref: "auths"
    },
    priority:{
        type: String
    },
    taskStatus: {
        type : Boolean,
        default : false
    },
    progress : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "progress"
        }
    ],
    done: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "dones"
        }
    ]
  
}, {timestamps: true})

export default mongoose.model<iTaskData>("tasks", taskModel)