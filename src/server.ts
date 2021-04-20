import app from "./app";
import "./database";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
