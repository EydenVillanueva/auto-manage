import { Sequelize } from "sequelize-typescript";

export const connectDB = async () => {
  const hostName = process.env.HOST;
  const username = process.env.USER;
  const password = process.env.PASSWORD;
  const database = process.env.DB;
  const dialect: any = process.env.DIALECT

  const sequelize = new Sequelize(database, username, password, {
    host: hostName,
    dialect: dialect,
    models: [__dirname + "/tasks/models"],
  });

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
}

