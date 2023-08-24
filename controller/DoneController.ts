import { Request, Response } from "express";
import DoneModel from "../model/DoneModel";
import { STATUSCODE } from "../error/ErrorNotifier";

export const createDoneTask = async(req: Request, res: Response) =>{
    try {
        const done = await DoneModel.create(req.body)

        return res.status(STATUSCODE.CREATE).json({message: "done has been created", data: done})
    } catch (error: any) {
        return res.status(STATUSCODE.BAD).json({message: "unable to create done", data: error.message})
    }
}

export const readDoneTask = async(req: Request, res: Response) =>{
    try {
        const user = await DoneModel.find()

        return res.status(STATUSCODE.OK).json({message: "reading done users", data: user})
    } catch (error: any) {
        return res.status(STATUSCODE.BAD).json({message: "Error reading users", data: error.message})
    }
}

export const readOneDoneTask = async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const user = await DoneModel.findById(id);

        return res.status(STATUSCODE.CREATE).json({messsage: "reading on done users", data: user})
    } catch (error: any) {
        return res.status(STATUSCODE.BAD).json({message: "Error reading one user", data: error.message})
    }
}

export const deleteDoneTask = async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;

        const user = DoneModel.findById(id)

        return res.status(STATUSCODE.OK).json({message: "Done task has been deleted", data: user})
    } catch (error: any) {
        return res.status(STATUSCODE.BAD).json({message: "Unable to delete done task", data: error.message})
    }
}

