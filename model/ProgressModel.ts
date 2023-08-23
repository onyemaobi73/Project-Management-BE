import mongoose from "mongoose";
import { iProgressData } from "../utils/interface";

const progressModel = new mongoose.Schema({
    progressTask: {
        type: String
    },
    progressAvatar:{
        type: String
    },
    progressName: {
        type: String
    },
    progressPriority:{
        type: String
    },
    progressStatus: {
        type: Boolean,
        default: false
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks"
    }, 
    done: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dones"
        }
    ]
}, 
{timestamps: true}
)

export default mongoose.model<iProgressData>("progress", progressModel)