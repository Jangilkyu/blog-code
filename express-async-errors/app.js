// basic
require('dotenv').config();
require('express-async-errors');

// db
const connectDB = require('./db/connect');

// server
const express = require('express');
const app = express();

// utility middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

// routes
const userRouter = require('./routes/auth');
app.use('/api/v1/users', userRouter);

// error-handling middleware
const errorHandleMiddleware = require('./middleware/error-handler');
app.use(errorHandleMiddleware);

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