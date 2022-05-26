const mongoose = require('mongoose');
const authorsDB = "authorsDB";

mongoose.connect(`mongodb://localhost/${authorsDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connection established to MongoDB ${authorsDB}`);
    })
    .catch((err) => {
        console.log('DB CONNECTION ERROR', err);
    });