import express, { Request, Response, Router } from "express";
import { ITasks } from "./interfaces";

export const todoRouter: Router = express.Router();

const tasks: ITasks[] = [];

todoRouter.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

todoRouter.post('/tasks', (req: Request, res: Response) => {
  const body = req.body;

  if(!body.title)
    res.json({ status: 400, code: "title is required" });  

  const newTodo: ITasks = {
    title: body.title,
    description: body.description
  };

  tasks.push(newTodo);
  
  res.json({
    status: 201,
    message: "todo successfully created",
  });
});