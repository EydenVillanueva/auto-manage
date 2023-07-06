import express, { Express } from "express";
import { taskRouter } from "./src/tasks/routers";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(taskRouter);