const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please Enter An Excercise Type",
        },
        name: {
          type: String,
          trim: true,
          required: "Please Enter in an Excercise Name",
        },
        duration: {
          type: Number,
          required: "Please Enter in a Duration",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }

  //creates a virtual that then takes the excercise durations of that day and adds them together
  //and returns them to be displayed.
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = Workout = mongoose.model("Workout", WorkoutSchema);
