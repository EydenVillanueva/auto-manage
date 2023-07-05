import { Sequelize } from "sequelize-typescript";
import { Task } from "./todo/models";

export const connectDB = () => {
  const hostName = process.env.HOST;
  const userName = process.env.USER;
  const password = process.env.PASSWORD;
  const database = process.env.DB;
  const dialect: any = process.env.DIALECT

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    repositoryMode: true,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  });

  sequelize.addModels([Task]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
}

