const mongojs = require("mongojs");
const db = require("../models");

//gets all workouts
module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  //creates new workouts
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  //updates workouts
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
      {
        _id: mongojs.ObjectID(req.params.id),
      },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //gets the range of past workouts for the stats.
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
