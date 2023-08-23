import mongoose from "mongoose";

export interface iAuth {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
}

export interface iTask {
  taskName?: string;
  taskAvatar?: string;
  task?: string;
  priority?: string;
}

export interface iProgress {
  task?: string;
  avatar?: string;
  name?: string;
  priority?: string;
}

export interface iDone {
  doneTask?: string;
  doneName?: string;
  doneAvatar?: string;
  donePriority?: string;
  // task?: {};
}

export interface iAuthData extends iAuth, mongoose.Document {}

export interface iTaskData extends iTask, mongoose.Document {}

export interface iProgressData extends iProgress, mongoose.Document {}

export interface iDoneData extends iDone, mongoose.Document {}
