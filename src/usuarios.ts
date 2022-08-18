import * as express from "express"
import { Request, Response } from "express"
import dataSource from "./dataSource"

const router = express.Router()

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


export default router