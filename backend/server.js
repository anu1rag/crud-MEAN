
require('dotenv').config();
console.log(process.env.secret);
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const responseHandler = require('./middlewares/handlers/responseHandler');
const errorHandler = require('./middlewares/handlers/errorHandler');

const childRoute = require('./routes/child/child.route');
const stateRoute = require('./routes/state/state.route');
const districtRoute = require('./routes/district/district.route'); 



app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'../frontend/dist/frontend')))
app.use(responseHandler);
app.use('/api/child',childRoute);
app.use('/api/state', stateRoute);
app.use('/api/district', districtRoute);
app.use(errorHandler);
mongoose.connect('mongodb://0.0.0.0:27017/mynewapp', {useNewUrlParser: true,useUnifiedTopology: true}).then((data)=>{
  console.log("Database successfully connected");
}).catch((err)=>{
    console.log(err.message);
    console.log("Please connect database");
});


app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html')) 
});

app.use((req,res,next)=>{
	res.status(404).send('Unable to find the requested resource!');
});


app.listen(3002, ()=>{
    console.log("Listening on port 3002");
});