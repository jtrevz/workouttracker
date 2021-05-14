const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        { 
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
                
            }
        }
    ])
    .sort({_id: -1})
    .limit(1)
    .then(workout => {
        console.log(workout);
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.id,
        },
        {
            $push: {
                exercises: req.body
            }
        }
    ).then(workout => {
        console.log(workout);
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        { 
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
                
            }
        }
    ])
    .sort({_id: -1})
    .limit(7)
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;

