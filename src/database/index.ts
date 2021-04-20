import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
