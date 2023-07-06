import Tasks from "../models/task.model";
import { Op } from "sequelize";
import { ITasks } from "../interfaces";

class TaskManagementService {
  public getAll(): Promise<ITasks[]> {
    try {
      return Tasks.findAll();
    } catch (e) {
      console.error(e);
    }
  }

  public get(properties): Promise<ITasks[]> {
    if (!Object.keys(properties).length)
      throw new Error("at least one search property is required");

    try {
      let props: any = {};

      Object.keys(properties).forEach((k) => {
        props[k] = properties[k].toLowerCase();
      });

      const query = {
        where: {
          [Op.or]: {
            ...(props.title != undefined && {
              title: { [Op.match]: props.title },
            }),
            ...(props.description !== undefined && {
              description: { [Op.match]: props.description },
            }),
          },
        },
      };

      return Tasks.findAll(query);
    } catch (e) {
      console.error(e);
    }
  }

  public create(properties): Promise<ITasks> {
    try {
      return Tasks.create(properties);
    } catch (e) {
      console.error(e);
    }
  }

  public async updateById(id, properties): Promise<ITasks> {
    try {
      const [, affectedRows] = await Tasks.update(properties, {
        where: { id },
        returning: true,
      });
      return affectedRows[0];
    } catch (e) {
      console.error(e);
    }
  }

  public async deleteById(id): Promise<ITasks> {
    try {
      const task = await Tasks.findByPk(id);
      await task.destroy();

      return task;
    } catch (e) {
      console.error(e);
    }
  }
}

export default TaskManagementService;
