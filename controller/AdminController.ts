import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloudinary from "../utils/cloudinary";
import AdminModel from "../model/AdminModel";
import AuthModel from "../model/AuthModel"
import { STATUSCODE } from "../error/ErrorNotifier";
import mongoose from "mongoose";


export const registerAdmin = async (req: any, res: Response) => {
  try {
    const { adminName, adminEmail, adminPassword } = req.body;
    const slat = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(adminPassword, slat);
    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file?.path!
    );
    const user = await AdminModel.create({
      adminName,
      adminEmail,
      adminPassword: hashed,
      adminAvatar: secure_url,
      adminAvatarID: public_id,
    });
    return res
      .status(STATUSCODE.CREATE)
      .json({ message: "user created", data: user });
  } catch (error) {
    return res.status(STATUSCODE.BAD).json({ message: "Error" });
  }
};

export const signInAdmin = async (req: Request, res: Response) => {
  try {
    const { adminEmail, adminPassword } = req.body;

    const admin = await AdminModel.findOne({ adminEmail });
    if (admin) {
      const hashed = await bcrypt.compare(adminPassword, admin?.adminPassword!);
      if (hashed) {
        return res.status(STATUSCODE.CREATE).json({
          message: `welcome back ${admin.adminName}`,
          data: admin._id,
        });
      } else {
        return res
          .status(STATUSCODE.BAD)
          .json({ message: "password is not correct" });
      }
    } else {
      return res.status(STATUSCODE.BAD).json({ message: "Error" });
    }
  } catch (error) {
    return res.status(STATUSCODE.BAD).json({ message: "Error" });
  }
};

export const viewAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await AdminModel.find();
    return res
      .status(STATUSCODE.OK)
      .json({ message: "view admin", data: admin });
  } catch (error) {
    return res.status(STATUSCODE.BAD).json({ message: "Error" });
  }
};

// export const updateAdmin = async (req:Request, res:Response)=>{
//     try {
//         const {adminName, adminPassword} = req.body
//             const admin  = await AdminModel.find()
//             return res.status(STATUSCODE.OK).json({ message:"view admin", data:admin})
//     } catch (error) {
//         return res.status(STATUSCODE.BAD).json({message:"Error"})
//     }
// }

export const member = async(req: Request, res: Response) => {
    try {
      const { adminID, userID } = req.params;
  
      const admins: any = await AdminModel.findById(adminID)
      const user: any = await AuthModel.findById(userID);
  
      if (user) {
         await user.subordinate?.push(new mongoose.Types.ObjectId(userID))
        user.save()
  
        return res.status(STATUSCODE.CREATE).json({message: `You are now a member of ${admins.adminName} team`})
      } else {
        return res.status(STATUSCODE.BAD).json({message: "Something went wrong"})
      }
    } catch (error) {
      return res.status(STATUSCODE.BAD).json({message: "Error creating friends"})
    }
  }
