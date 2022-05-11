const mongoose = require('mongoose');
const jokesDB = "jokesDB";

mongoose.connect(`mongodb://localhost/${jokesDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connection established to MongoDB ${jokesDB}`);
    })
    .catch((err) => {
        console.log('DB CONNECTION ERROR', err);
    });