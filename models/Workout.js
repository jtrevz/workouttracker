const mongoose = require("mongoose");
const router = require("express").Router();

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default:() => new Date()
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



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;