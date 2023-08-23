import { Request, Response } from "express";
import ProgressModel from "../model/ProgressModel";
import { STATUSCODE } from "../error/ErrorNotifier";
import AuthModel from "../model/AuthModel";
import mongoose from "mongoose";
import TaskModel from "../model/TaskModel";

export const createProgress = async (req:Request, res:Response)=>{
    try {

        // const user = await AuthModel.findById(id)
        const tasked = await ProgressModel.create(req.body)

        return res.status(STATUSCODE.CREATE).json({message: "progress has been made in the task", data: tasked})
    } catch (error: any) {
        return res.status(STATUSCODE.BAD).json({message: "Error creting progress", data: error.message})
    }
}

export const readProgress = async(req: Request, res: Response) =>{
    try {
        const tasked = await ProgressModel.find().populate({
            path: "progress",
            options: {
                sort: {
                    createdAt: -1
                }
            }
        })

        return res.status(STATUSCODE.OK).json({message: "reading progress", data: tasked})
    } catch (error) {
        return res.status(STATUSCODE.BAD).json({message: "Error reading progress"})
    }
}

export const deleteProgress = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tasked = await ProgressModel.findByIdAndDelete(id)

        return res.status(STATUSCODE.OK).json({message: "task deleted", data: tasked})
    } catch (error) {
        return res.status(STATUSCODE.BAD).json({message: "Error deleting progress"})
    }
}

export const updateOneProgress =  async (req:Request, res:Response) => {
    try {
        const {progressTask, progressPriority, progressStatus} = req.body
        const getProgress = await TaskModel.findById(req.params.taskID)
        if (progressStatus === false) {
            return res.status(STATUSCODE.BAD).json({message: "Progress Completed, move to done"})
        } else {
            const progress = await TaskModel.findByIdAndUpdate(getProgress?._id,
                {progressTask, progressPriority, progressStatus},
                {new:true});

                getProgress?.progress.push(new mongoose.Types.ObjectId(progress?._id))
                getProgress?.save()
                res.status(STATUSCODE.OK).json({ message:"progress read", data:progress})
        }
    } catch (error) {
        res.status(STATUSCODE.BAD).json({ message:"Error reading progress"})
    }
}

// export const readProgressDetail = async(req: Request, res: Response) =>{
//     try {
//         const { id } = req.params;
//         const tasked = await ProgressModel.findById(id).populate({
//             path: "step", 
//             options: {
//                 sort: { createdAt: 1 },
//             }
//         })

//         return res.status(STATUSCODE.OK).json({message: "reading task", data: tasked})
//     } catch (error) {
//         return res.status(STATUSCODE.BAD).json({message: "Error reading progress"})
//     }
// }
