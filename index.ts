import express, { Application } from "express"
import { envVariables } from "./config/envVariables"
import { DBConfig } from "./config/db"
import { myAppConnect } from "./MyAppConnect"
import dotenv from "dotenv"
dotenv.config();

const port: number = parseInt(envVariables.PORT)

const app: Application = express()

myAppConnect(app)

const server = app.listen(process.env.PORT || port, ()=>{
    DBConfig()
})

process.on("uncaughtException", (error: any)=>{
    console.log("uncaughtException", error)

    process.exit(1)
})

process.on("unhandledRejection", (reason: any)=>{
    console.log("unhandledRejection", reason)

    server.close(()=>{
        process.exit(1)
    })
})

