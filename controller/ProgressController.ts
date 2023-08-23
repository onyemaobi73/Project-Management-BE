import { Request, Response } from "express";
import ProgressModel from "../model/ProgressModel";
import { STATUSCODE } from "../error/ErrorNotifier";

export const createProgress = async (req:Request, res:Response)=>{
    try {
        const tasked = await ProgressModel.create(req.body)

        return res.status(STATUSCODE.CREATE).json({message: "progress has been made in the task"})
    } catch (error) {
        return res.status(STATUSCODE.BAD).json({message: "Error creting progress"})
    }
}

export const readProgress = async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const tasked = await ProgressModel.find()

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

export const readProgressDetail = async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const tasked = await ProgressModel.findById(id).populate({
            path: "step", 
            options: {
                sort: { createdAt: 1 },
            }
        })

        return res.status(STATUSCODE.OK).json({message: "reading task", data: tasked})
    } catch (error) {
        return res.status(STATUSCODE.BAD).json({message: "Error reading progress"})
    }
}
