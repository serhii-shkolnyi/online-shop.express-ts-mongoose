import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { apiConfig } from "./configs";
import { ApiError } from "./errors";
import { routers } from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;

  res.status(status).json({
    message: error.message,
    status: error.status,
  });
});

// app.get(
//   "/users",
//   async (req: Request, res: Response): Promise<Response<IUser[]>> => {
//     const users = await User.find();
//
//     return res.json(users);
//   },
// );
//
// // Endpoint for creating user
// app.post("/users", async (req, res) => {
//   try {
//     const createdUser = await User.create({ ...req.body });
//     res.status(201).json(createdUser);
//   } catch (e: any) {
//     res.status(400).json(e.message);
//   }
// });

app.listen(apiConfig.PORT, async () => {
  await mongoose.connect(apiConfig.DB_URL);
  console.log(
    `DataBase connected Successfully. Server started on PORT ${apiConfig.PORT}`,
  );
});
