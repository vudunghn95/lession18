const express = require('express');
const arrayRouter = require('./routers/array');
const objectRouter = require('./routers/object');
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/array',arrayRouter);
app.use('/object',objectRouter);



app.listen(3000);