//associate the installed dependencies
const express = require('express');
const bodyParser = require('body-parser');

//initialize app express
const app = express();

let port = 5000;

app.listen(process.env.port || port, () =>{
    console.log('Server running on port: ' + port);
});

//INVALID ENDPOINT
app.get('/', function(req, res) {
    res.send('INVALID ENDPOINT');
});

//every url starting with '/api' calls the routes in './routes/api'
const routes = require('./routes/api');
app.use('/api', routes);

app.use(bodyParser.json());