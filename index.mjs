import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/conn.mjs";

const PORT = process.env.PORT || 5052;

const app = express();
app.use(express.json());
import learner from "./models/learners.mjs";
import learners from "./routes/learners.mjs";
//make a new document so tha i can see it work

// const newDoc = new learners({
//   name: "frodo",
//   enrolled: true,
//   year: 2024,
// });

app.get("/", (req, res) => {
  res.send("this is the learners api");
});

app.use("/api/learners", learners);

//global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("seems like we messed up somewhere");
});
//0start the express server

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
