// server
const express = require('express');
const app = express();

// port
const port = 3000;

// routes
const usersRouter = require('./routes/users');
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});