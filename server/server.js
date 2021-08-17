import express from "express";
import dotenv from "dotenv";
import db from "./db/index.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//get all attendance data
app.get("/api/v1/attdata", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT id, att_date, start_time, end_time, lunch_min, total_work_hour FROM attdata"
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        attdata: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get a attendance entry
app.get("/api/v1/attdata/:id", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT id, att_date, start_time, end_time, lunch_min, total_work_hour FROM attdata WHERE id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        attdata: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//create a attendance entry
app.post("/api/v1/attdata/", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO attdata (att_date, start_time, end_time, lunch_min) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        req.body.att_date,
        req.body.start_time,
        req.body.end_time,
        req.body.lunch_min,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        attdata: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//update a attendance entry
app.put("/api/v1/attdata/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE attdata SET att_date = $1, start_time = $2, end_time = $3, lunch_min = $4 WHERE id = $5 RETURNING *",
      [
        req.body.att_date,
        req.body.start_time,
        req.body.end_time,
        req.body.lunch_min,
        req.params.id,
      ]
    );

    res.status(200).json({
      status: "success",
      data: {
        attdata: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//delete an attendance entry
app.delete("/api/v1/attdata/:id", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM attdata WHERE id = $1 RETURNING *",
      [req.params.id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log("server is up and listen to port " + port));
