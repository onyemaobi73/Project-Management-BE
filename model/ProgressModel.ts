import mongoose from "mongoose";
import { iProgressData } from "../utils/interface";

const progressModel = new mongoose.Schema({
    task: {
        type: String
    },
    avatar:{
        type: String
    },
    name: {
        type: String
    },
    priority:{
        type: String
    }
}, {timestamps: true})

export default mongoose.model<iProgressData>("progress", progressModel)