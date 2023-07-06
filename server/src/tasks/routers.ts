import express, { Request, Response, Router } from "express";
import TaskManagementService from "./services/TaskManagementService";


export const taskRouter: Router = express.Router();
const service: TaskManagementService = new TaskManagementService();

taskRouter.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await service.getAll();
    res.json({ status: 200, data: tasks });
  }
  catch(e) {
    console.log(e);
    res.json({ status: 500, message: "something happened" });
  }
});

taskRouter.get('/tasks/search', async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const tasks = await service.get(body);
    res.json({ status: 200, data: tasks });
  } catch(e) {
    console.log(e);
    res.json({ status: 500, message: "something happened" });
  }
});

taskRouter.post('/tasks', async (req: Request, res: Response) => {
  const body = req.body;

  if(!body.title)
    res.json({ status: 400, code: "title is required" });

  try{
    const newTask = await service.create(body);

    res.json({
      status: 201,
      data: newTask,
      message: "todo successfully created",
    });
  } 
  catch(e) {
    console.log(e);
    res.json({ status: 500, message: "something happened" });
  }
});

taskRouter.put('/tasks/:id', async (req: Request, res: Response) => {
  const body = req.body;
  const id = req.params.id;

  if(!id)
    res.json({ status: 400, code: "task id is required" });

  try{
    const newTask = await service.updateById(id, body);

    res.json({
      status: 200,
      data: newTask,
      message: "todo successfully updated",
    });
  } 
  catch(e) {
    console.log(e);
    res.json({ status: 500, message: "something happened" });
  }
});

taskRouter.delete('/tasks/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const task = await service.deleteById(id);
    res.json({
      status: 200,
      data: task,
      message: "task successfully deleted"
    });
  } 
  catch(e){
    console.log(e);
    res.json({ status: 500, message: "something happened" });
  }
});