import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/api/products");

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
