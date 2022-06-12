// server
const express = require('express');
const app = express();

// db
const connectDB = require('./db/connect');

// utility middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

// start server
const port = process.env.PORT || 3000;

// routes
const authRouter = require('./routes/auth');
app.use('/api/v1/auth', authRouter);

const start = async()  => {
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