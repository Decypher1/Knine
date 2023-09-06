const express = require('express');
const app = express();
const connectMongoDB = require('./src/db');
const PORT = process.env.PORT || 4000;


//connect to db
connectMongoDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

