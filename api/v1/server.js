import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors';
import v1authRouter from "./routes/authRoutes.js";
import v1userRouter from "./routes/userRoutes.js";
import v1projectRouter from "./routes/projectRoutes.js";
import v1IssueRouter from "./routes/issueRoutes.js";
import { hostname } from "os";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection made successfully to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  optionSuccessStatus: 200,
  credentials: true
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/auth", v1authRouter);
app.use("/api/v1/users", v1userRouter);
app.use("/api/v1/project", v1projectRouter)
app.use("/api/v1/projects", v1IssueRouter)

app.listen(PORT, hostname, () => {
  connectDatabase();
  console.log(`Express app running on ${hostname} ${PORT}`);
});