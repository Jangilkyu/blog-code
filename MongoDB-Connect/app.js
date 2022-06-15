require('dotenv').config();

// server
const express = require('express');
const app = express();

// db
const connectDB = require('./db/connect');

// port
const port = 3000;

const start = async() => {
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