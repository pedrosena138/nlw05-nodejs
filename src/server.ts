import app from "./app";
import "./database";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
