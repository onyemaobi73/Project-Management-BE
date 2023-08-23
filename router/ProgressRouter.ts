import express, { Router } from "express"
import { createProgress, deleteProgress, readProgress, readProgressDetail } from "../controller/ProgressController"

const router: Router = express()
router.route("/create-progress").post(createProgress)
router.route("/view-progress").get(readProgress)
router.route("/:id/delete-progress").delete(deleteProgress)
router.route(":id/view-progress-info").get(readProgressDetail)