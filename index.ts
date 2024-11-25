import express, { Application } from "express";
import env from "dotenv";
import cors from "cors";
env.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("connected partially..");
});
