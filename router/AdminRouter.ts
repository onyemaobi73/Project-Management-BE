import express, { Router } from "express"
import { registerAdmin, signInAdmin, viewAdmin,  member,} from "../controller/AdminController"
import { upload } from "../utils/multer"

const router: Router = express()

router.route("/register-admin").post(upload, registerAdmin)
router.route("/signin-admin").post(signInAdmin)
router.route("/view-admin").get(viewAdmin)
router.route("/:adminID/:userID/a-member").get(member)

export default router