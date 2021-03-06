const express = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = express();


app.use(cors({
    allowedHeaders: '*',
    exposedHeaders: '*'
}))
app.use(express.json());
app.use(routes);


app.listen(3001);

module.exports = app;

