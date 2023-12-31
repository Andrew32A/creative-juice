/* eslint-disable new-cap */
import accountsRouter from "./routes/accounts.js";
import promptRouter from "./routes/prompts.js";
import postRouter from "./routes/posts.js";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api", [accountsRouter, promptRouter, postRouter]);

app.listen("3000", () => {
  console.log("Server listening on Port 3000");
});

export default app;
