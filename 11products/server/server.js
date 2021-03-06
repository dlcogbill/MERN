const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');

const app = express();
const PORT = 8000;

app.use( express.json(), express.urlencoded({ extended: true }) );

app.use(cors({ origin: 'http://localhost:3000' }));

require('./routes/product.routes')(app);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});