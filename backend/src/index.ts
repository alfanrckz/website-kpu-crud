import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./routes"
import * as cors from "cors"
import cloudinary from "./libs/cloudinary"
import * as dotenv from "dotenv";
dotenv.config();

AppDataSource.initialize().then(async () => {
    const app = express()
    const PORT = process.env.PORT

    // const corsOption = {
    //     origin: "http://localhost:5173",
    //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    //     preflightContinue: false,
    //     optionSuccessStatus: 204
    // }

    app.use(cors())

    app.use(express.json())
    app.use("/api/v1", router)
    cloudinary.upload()

    app.listen(PORT, () => console.log(`Server running on Port : ${PORT}`))

}).catch(error => console.log(error))
