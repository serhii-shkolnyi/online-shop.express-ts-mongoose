import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

import { apiConfig } from "./configs";
import { IUser } from "./interfaces";
import { User } from "./models/User.model";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/users",
  async (req: Request, res: Response): Promise<Response<IUser[]>> => {
    const users = await User.find();

    return res.json(users);
  },
);

// Endpoint for creating user
app.post("/users", async (req, res) => {
  try {
    const createdUser = await User.create({ ...req.body });
    res.status(201).json(createdUser);
  } catch (e: any) {
    res.status(400).json(e.message);
  }
});

app.listen(apiConfig.PORT, async () => {
  await mongoose.connect(apiConfig.DB_URL);
  console.log(
    `DataBase connected Successfully. Server started on PORT ${apiConfig.PORT}`,
  );
});
