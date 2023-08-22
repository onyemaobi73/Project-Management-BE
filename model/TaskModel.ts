import mongoose from "mongoose";
import { iTaskData } from "../utils/interface";

const taskModel = new mongoose.Schema({
    taskName: {
        type: String
    },
    taskAvatar: {
        type: String
    },
    task: {
        type: String
    },
    priority:{
        type: String
    }
}, {timestamps: true})

export default mongoose.model<iTaskData>("tasks", taskModel)