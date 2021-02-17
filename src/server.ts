import express from 'express';
import Cors from 'cors';
import mongoose from 'mongoose';
import * as control from './Controllers/car_get';

var app = express();
var port = process.env.PORT || 8080

app.use(express.json());
app.use(Cors());

var Connection_url = 'mongodb+srv://yashyerolkar:yashyerolkar@cluster0.d0sax.mongodb.net/db1?retryWrites=true&w=majority'

mongoose.connect(Connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get("/", function (req, res){
    res.send( "Welcome to Tutorial of REST API using MongoDB, ExpressJS and NodeJS");
})

app.get('/Cars', control.car_get);

app.post('/Cars_add', control.car_post);

app.listen(port);