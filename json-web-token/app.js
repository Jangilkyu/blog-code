// basic
require('dotenv').config();
require("express-async-errors");

// db
const connectDB = require('./db/connect');

// server
const express = require('express');
const app = express();

// utility middleware
app.use(express.json());

// start server
const port = process.env.PORT || 3000;


// authentication middlewares
const auth = require('./middleware/authentication');

// routes
const authRouter = require("./routes/auth");
const userRouter = require('./routes/users');
app.use("/api/v1/auth", authRouter);
app.use('/api/v1/users', auth, userRouter);

// error-handling middleware
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`);
        });
    } catch (e) {
        console.log(`error has occured ${e}`);
    }
}

start();
