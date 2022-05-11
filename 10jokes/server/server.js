const express = require('express');

require('./config/mongoose.config');

const app = express();
const PORT = 8000;

app.use( express.json(), express.urlencoded({ extended: true }) );

require('./routes/jokes.routes')(app);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});