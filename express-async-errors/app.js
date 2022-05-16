require('dotenv').config();
require('express-async-errors');

// server
const express = require('express');
const app = express();

// utility middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const userRouter = require('./routes/auth');
app.use('/v1/api', userRouter);

// db
const connectDB = require('./db/connect');

// start server
const port = 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, async () => {    
            console.log(`server is listening on port ${port}`);
        });
    } catch (e) {
        console.log(`error has occured ${e}`);
    }
}
start();