import path from "path";
import express from "express";
import dotenv from "dotenv";

import todoRoute from "./routes/todoRoute.js";
import dbConnect from "./utils/db.js";

const app = express();

// app.use(cors({
//   origin: "*",
//   method: ['GET','POST',"PUT","DELETE"]
// }));

app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5555;
const __dirname = path.resolve();

app.use("/api/todo", todoRoute);
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  dbConnect();
  console.log(`server running on http://localhost:${PORT}`);
});
