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
    task: {
      type: mongoose.Types.ObjectId,
        ref: "tasks"
    }, 
    done: [
        {
          type: mongoose.Types.ObjectId,
            ref: "dones"
        }
    ]
}, 
{timestamps: true}
)

export default mongoose.model<iProgressData>("progress", progressModel)