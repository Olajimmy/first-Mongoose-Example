import express from "express";
const router = express.Router();
import learners from "../models/learners.mjs";

//define a seed route
router.get("/seed", async (req, res) => {
  try {
    await learners.create([
      {
        name: "frodo",
        enrolled: true,
        year: 2024,
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(400).send(err);
  }
});

router.get("/api/learners", async (req, res) => {
  try {
    const foundLearners = await learners.find({});
    res.status(200).json(foundLearners);
  } catch (err) {
    res.status(400).send(err);
  }
});
export default router;
