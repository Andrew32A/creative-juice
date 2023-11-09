/* eslint-disable new-cap */
import accountsRouter from './routes/accounts.js'
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();  
// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({extended: false}));

app.use("/api/", [accountsRouter])

app.listen('3000', () => {
  console.log('Server listening on Port 3000');
});

export default app;