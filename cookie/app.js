require('dotenv').config();

// server
const express = require('express');
const app = express();

// utility middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

const cookieParser = require('cookie-parser'); 
app.use(cookieParser(process.env.COOKIE_SECRET)); 

const auth = require('./routes/auth');
app.use('/', auth);

// db
const connectDB = require('./db/connect');

// start server
const port = process.env.PORT || 3000;


app.get('/',function(req, res){
    res.cookie('cookie1', 'This is my first cookie', {signed:true, maxAge: 1000*60*60*24*7, httpOnly: true});
    res.end('Cookie has been set');
});

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