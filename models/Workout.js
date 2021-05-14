const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        { 
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            distance: {
                type: Number,
                trim: true,
            },
            duration: {
                type: Number,
                trim: true,
                required: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        },
    ]
});



const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;