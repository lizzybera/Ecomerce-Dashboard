import { PrismaClient } from "@prisma/client";
import { HTTP } from "../error/mainError";
import bcrypt from "bcrypt"
import { Response, Request } from "express";

const prisma = new PrismaClient();


export const getUsers = async (req: Request, res: Response) => {
    try {
        const User = await prisma.user.findMany({});
        return res.status(HTTP.OK).json({
            message: "view Users",
            data : User
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: "Error",
            data : error
        })
    }
}



export const createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      // const salt = await bcrypt.genSalt(5)
      // const encrypt = await bcrypt.hash(password, salt)
    const User = await prisma.user.create({
        data: { name , email, password}
      });
      return res.status(HTTP.CREATED).json({
        message: "create User",
        data: User,
      });
    } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
        message: error,
      });
    }
  };

  export const signInUser = async (req: Request, res: Response) => {
    try {
      const { userID } = req.params;
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          id: userID,
        },
        select: {
          email: true,
          password: true,
                },
                
      });

      if (user && email === user.email && password === user.password) {
        return res.status(HTTP.CREATED).json({
          message: `Welcome User Back ${user?.email}`,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
        message: error,
      });
    }
  };
// export const signInUser = async (req: Request, res: Response) => {
//     try {
//       const { userID } = req.params;
//       const { email, password } = req.body;

//       const em = await prisma.user.findUnique({where:{id: userID}})
//       const ems = await em?.email

//       if (email===ems) {
//             const enc =await em?.password
//         if (password === enc) {
//           return res.status(HTTP.CREATED).json({
//             message: `Welcome User Back ${em?.name}` ,
            
//           });
//         } else {
//           return res.status(HTTP.BAD_REQUEST).json({
//             message: "Invalid User password",
//           });
//         }
//       } else {
//         return res.status(HTTP.BAD_REQUEST).json({
//           message: "Invalid User Email",
//         });
//       }
      
//     } catch (error) {
//       return res.status(HTTP.BAD_REQUEST).json({
//         message: error,
//       });
//     }
//   };


  
  
