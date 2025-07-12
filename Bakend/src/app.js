import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}));

app.use(express.urlencoded({extended: true, limit:"16kb"}))

app.use(express.static("public"));

app.use(cookieParser())


// import routes 
import userRouter from "./routes/user.routes.js"
import applicationRouter from "./routes/application.routes.js"




//routes declearation 
app.use("/api/v1/users", userRouter)
app.use("/api/v1/applications", applicationRouter)
app.use(errorHandler)

export {app};