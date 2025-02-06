// // user controller

// import { Request, Response } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User";
// import Token from "../models/Token";
// import { validationResult } from "express-validator";
// import { generateTokens } from "../utils/generateTokens";
// import { sendEmail } from "../utils/sendEmail";

// // Register

// export const register = async (req: Request, res: Response) => {
//   try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ message: "Registration error", errors });
//     }

//     const { username, email, password } = req.body;

//     const candidate = await User.findOne({ email });

//     if (candidate) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashPassword = await bcrypt.hash(password, 8);

//     const activationLink = jwt.sign({ email }, process.env.JWT_SECRET || "", {
//       expiresIn: "24h",
//     });

//     const user = new User({
//       username,
//       email,
//       password: hashPassword,
//       activationLink,
//     });

//     await user.save();

//     await sendEmail(email, activationLink);

//     return res.status(201).json({ message: "User has been created" });
//   } catch (error) {
//     return res.status(500).json({ message: "Registration error" });
//   }
// };
