import express, { Express } from "express";
import { taskRouter } from "./src/tasks/routers";
import corsConfig from './src/config/cors';

export const app: Express = express();

app.use(corsConfig());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(taskRouter);