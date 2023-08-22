import mongoose from "mongoose"
import { iDone, iDoneData } from "../utils/interface"

const DoneModel = new mongoose.Schema<iDone>({
    assignedName: {
        type: String
    },
    assignedAvatar:{
        type: String
    },
    assignedTask: {
        type: String
    },
    assignedPriority: {
        type: String
    },
    task: {
        type: mongoose.Types.ObjectId,
        ref: "tasks"
    }
}, {timestamps: true})

export default mongoose.model<iDoneData>("dones", DoneModel)