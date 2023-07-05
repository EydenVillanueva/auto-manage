import express, { Express } from "express";
import { todoRouter } from "./src/todo/routers";

export const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(todoRouter);