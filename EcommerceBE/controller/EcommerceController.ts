import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { HTTP } from "../error/mainError";
import https from "https"

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
    try {
        const product = await prisma.ecommerce.findMany({});
        return res.status(HTTP.OK).json({
            message: "view product",
            info : product.length,

            data : product
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: "Error"
        })
    }
}


export const createProduct = async (req: Request, res: Response) => {
    try {
      const { title, cost, image , rate} = req.body;
    const product = await prisma.ecommerce.create({
        data: { title, cost, image, rate},
      });
      return res.status(HTTP.CREATED).json({
        message: "create Product",
        data: product,
      });
    } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
        message: error,
      });
    }
  };
  

  export const detailedProject = async (req: Request, res: Response) => {
    try {
      const { productID} = req.params;

      const product = await prisma.ecommerce.findUnique({
        where : {id : productID}
      });
      return res.status(HTTP.CREATED).json({
        message : "create product",
        data: product,
      })
    } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
        message: error,
      })
    }
  }

  export const payment = async (req: Request, res: Response) => {
    try {
      const { amount } = req.body;
  
      const params = JSON.stringify({
        email: "customer@email.com",
        amount: amount * 100,
      });
  
      const options = {
        hostname: "api.paystack.co",
        port: 443,
        path: "/transaction/initialize",
        method: "POST",
        headers: {
          Authorization:
            "Bearer sk_test_ec1b0ccabcb547fe0efbd991f3b64b485903c88e",
          "Content-Type": "application/json",
        },
      };
  
      const ask = https
        .request(options, (resp) => {
          let data = "";
  
          resp.on("data", (chunk) => {
            data += chunk;
          });
  
          resp.on("end", () => {
            console.log(JSON.parse(data));
            res.status(HTTP.OK).json({
              message: "Payment successful",
              data: JSON.parse(data),
            });
          });
        })
        .on("error", (error) => {
          console.error(error);
        });
  
      ask.write(params);
      ask.end();
    } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
        message: "Error making Payment",
      });
    }
  };