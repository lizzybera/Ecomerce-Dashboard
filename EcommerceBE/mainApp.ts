import cors from "cors";
import express, { Application, NextFunction, Request, Response} from "express";
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/handleError";
import ecommerce from "./router/ecommerce";
import user from "./router/UserRouter";





export const mainApp = (app: Application) => {
    app.use(express.json());
    app.use(
        cors({
            origin: "*",
            methods: ["GET", "POST", "PATCH", "DELETE"],
        })
    );


     app.use(express.json());
     app.use("/api/v1", ecommerce)
     app.use("/api/v1", user)

    app.get("/",(req: Request, res: Response) => {
        res.status(HTTP.OK).json({
            message: "Nice work ",
        })
    } )

    

    app.all("*", (req : Request, res :Response, next: NextFunction) => {
        next(
            new mainError({
                name: "Router Error",
                message: `Route Error: because the page, ${req.originalUrl} doesn't exit`,
                status: HTTP.BAD_REQUEST,
                success: false,
                
            })
        )
    } )
app.use(errorHandler)
}
