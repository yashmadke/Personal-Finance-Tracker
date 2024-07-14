import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import financialRecordRouter from "./routes/financial-records";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const mongoURI: string = process.env.MONGODB_URI || "";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to connect to MongoDB: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
