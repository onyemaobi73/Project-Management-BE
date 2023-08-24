import { Request, Response } from "express";
import AuthModel from "../model/AuthModel";
import TaskModel from "../model/TaskModel";
import { STATUSCODE } from "../error/ErrorNotifier";
import mongoose from "mongoose";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { task, priority } = req.body;

    const user = await AuthModel.findById(id);

    const tasked = await TaskModel.create({
      name: user?.name,
      task,
      priority,
      taskAvatar: user?.avatar,
    });

    res.status(STATUSCODE.CREATE).json({
      message: "task created",
      data: tasked,
    });
  } catch (error: any) {
    return res
      .status(STATUSCODE.BAD)
      .json({ message: "Error creating task", data: error.message });
  }
};

export const readTask = async (req: Request, res: Response) => {
  try {
    const tasked = await TaskModel.find();

    res.status(STATUSCODE.OK).json({ message: "task", data: tasked });
  } catch (error: any) {
    res
      .status(STATUSCODE.BAD)
      .json({ message: "Error reading task", data: error.message });
  }
};

// export const updateOneTask = async (req: Request, res: Response) => {
//   try {
//     const { task, priority , taskStatus } = req.body;
//     const getTask = await TaskModel.findById(req.params.taskId)
//     if(taskStatus === false){
// return res.status(STATUSCODE.BAD).json({
//     message : "To start Task , please move to progess"
// })
//     }else{
//         const tasked = await TaskModel.findByIdAndUpdate(
//             getTask?._id,
//             { task, priority , taskStatus },
//             { new: true }
//           );
      
//           getTask?.progress?.push(new mongoose.Types.ObjectId(tasked?._id))
//           getTask?.save()
//           res.status(STATUSCODE.OK).json({ message: "task read", data: tasked });
//     }
  
//   } catch (error: any) {
//     res.status(STATUSCODE.BAD).json({ message: "Error reading task" });
//   }
// };

export const readOneTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await TaskModel.findById(id);

    res
      .status(STATUSCODE.CREATE)
      .json({ message: "reading task ", data: tasked });
  } catch (error: any) {
    res
      .status(STATUSCODE.CREATE)
      .json({ message: "Error reading task", data: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await TaskModel.findByIdAndDelete(id);

    res
      .status(STATUSCODE.CREATE)
      .json({ message: "task has been deleted", data: tasked });
  } catch (error: any) {
    res
      .status(STATUSCODE.BAD)
      .json({ message: "Error deleting task ", data: error.message });
  }
};


