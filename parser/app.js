// server
const express = require('express');
const app = express();

// port
const port = 3000;

app.post('/user', (req, res) => {
    console.log('req.body ==>', req.body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});