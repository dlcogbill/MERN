const Joke = require('../models/jokes.model');

module.exports = {
    
    getJokes: (req, res) => {
        Joke.find()
        .then((allJokes) => {
            res.json({jokes : allJokes});
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in findAll', error: err });
        });
    },
    
    createJoke: (req, res) => {
        Joke.create(req.body)
        .then((newJoke) => {
            res.json({joke : newJoke});
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in create', error: err });
        });
    },
    
    getJokeById: (req, res) => {
        Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({joke : oneJoke});
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in findById', error: err });
        });
    },
    
    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
        .then((joke) => {
            res.json({joke : joke});
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in delete', error: err });
        });
    },
    
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then((updatedJoke) => {
            res.json({joke : updatedJoke});
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in update', error: err });
        });
    },
};