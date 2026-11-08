import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import user from "./src/routes/user/routes-User.js";
//import task from "./src/routes/task/routes-Task.js";
import { errGlobal } from "./src/middlewares/err.js";

const app = express();

app.use(cors({
  origin: "http://localhost:4589",
  credentials: true
}));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use("/zentask/user", user);
//app.use("/zentask/task", task);
app.use(errGlobal);

export default app;