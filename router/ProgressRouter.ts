import express, { Router } from "express"
import { createProgress, deleteProgress, readProgress } from "../controller/ProgressController"

const router: Router = express()
router.route("/create-progress").post(createProgress)
router.route("/view-progress").get(readProgress)
router.route("/:id/delete-progress").delete(deleteProgress)

export default router