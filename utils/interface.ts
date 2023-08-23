import mongoose from "mongoose";

export interface iAuth {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  task?: {}
}

export interface iTask {
  name?: string;
  taskAvatar?: string;
  task?: string;
  priority?: string;
  taskStatus : string
  progress : {}[];
  // done : {}[]
}

export interface iProgress {
  progressTask?: string;
  progressAvatar?: string;
  progressName?: string;
  progressPriority?: string;
  progressStatus?: string;
  done: {}[];
  task?: {}
}

export interface iDone {
  doneTask?: string;
  doneName?: string;
  doneAvatar?: string;
  donePriority?: string;
  // task?: {};
  progress?: {}
}

export interface iAdmin {
  adminName?: string;
  adminEmail?: string;
  adminPassword?: string;
  adminAvatar?: string;
  adminAvatarID?: string;
}

export interface iAdminData extends iAdmin, mongoose.Document{}

export interface iAuthData extends iAuth, mongoose.Document {}

export interface iTaskData extends iTask, mongoose.Document {}

export interface iProgressData extends iProgress, mongoose.Document {}

export interface iDoneData extends iDone, mongoose.Document {}
