const mongoose = require('mongoose');

require("dotenv").config();

const mongodbConnectString = process.env.MONGODB_URL;

const connectMongoDB = () => {
    mongoose.connect(mongodbConnectString);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    }) 
    
    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    })
} 

module.exports = connectMongoDB;

// const db = mongoose.connection;
// mongoose.connect('mongodb://localhost:27017/express-mongoose-crud', { useNewUrlParser: true, useUnifiedTopology: true });
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('connected');
// }
// );
// module.exports = db;
// ```
// ```
