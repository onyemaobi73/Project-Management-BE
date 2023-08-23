import express, { Router } from "express"
import { registerAdmin, signInAdmin, viewAdmin } from "../controller/AdminController"
import { upload } from "../utils/multer"

const router: Router = express()

router.route("/register-admin").post(upload, registerAdmin)
router.route("/signin-admin").post(signInAdmin)
router.route("/view-admin").get(viewAdmin)

export default router