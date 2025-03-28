import express from "express";
import dotenv from "dotenv";
import router from "./routes/products.route.ts";
import { connectToDB } from "./config/db.ts";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/products", router);

app.listen(port, () => {
  connectToDB();
  console.log(`Server started on http://localhost:${port}`);
});
