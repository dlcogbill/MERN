const mongoose = require('mongoose');
const productsDB = "productsDB";

mongoose.connect(`mongodb://localhost/${productsDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connection established to MongoDB ${productsDB}`);
    })
    .catch((err) => {
        console.log('DB CONNECTION ERROR', err);
    });