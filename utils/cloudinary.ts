import { v2 as cloudinary } from "cloudinary";
import { envVariables } from "../config/envVariables";

cloudinary.config({
  cloud_name: envVariables.ClOUD_NAME,
  api_key: envVariables.CLOUD_KEY,
  api_secret: envVariables.CLOUD_SECRET,
  secure: true,
});

export default cloudinary;
