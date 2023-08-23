import mongoose from "mongoose"
import { iDone, iDoneData } from "../utils/interface"

const DoneModel = new mongoose.Schema<iDone>({
    doneName: {
        type: String
    },
    doneAvatar:{
        type: String
    },
    doneTask: {
        type: String
    },
    donePriority: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model<iDoneData>("dones", DoneModel)