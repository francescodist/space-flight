const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const port = 3000;

const users = JSON.parse( fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8') ) || {};

app.use(cors());

app.get('/astronauts/list', (req, res) => {
    res.json(users.astronauts || []);
});

app.listen(port, () => {
    console.log(`Mock Server Listening on Port ${3000}`);
});