import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./src/dbConnection";

dotenv.config();

(async () => {
  await connectDB();

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log("[server] Server is running at port", port);
  });
})()