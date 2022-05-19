require('dotenv').config();

// server
const express = require('express');
const app = express();

// utility middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const auth = require('./routes/auth');
app.use('/', auth);

// db
const connectDB = require('./db/connect');

// start server
const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		
		app.listen(port, async () => {
			
		});
	} catch(e) {
		console.log(e);
	}
};

start();