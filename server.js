const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

//Init app with express
const app = express();

//use body-parser middleware
app.use(bodyParser.json());

//Datab configuration
const db = require('./config/Key').mongoURI;

//connection 
mongoose.connect(db).
    then(() => console.log('connection established to database')).
    catch(err => console.log(err));


//router consideration 
app.use('/api/items', items);

//server setup
const port = process.env.PORT || 5000;
app.listen(port ,() => console.log(`Server listennig on ${port}`));
