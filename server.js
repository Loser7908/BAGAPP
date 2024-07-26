const express=require('express');
const db=require('./db');
const bodyParser=require('body-parser');
const PORT=process.env.PORT ||  3000;
const app=express();
const Router=express.Router();
require("dotenv").config();
app.use(express.json());


//models
const User = require('./model/userinfo');
const Bag = require('./model/Product');
const Order = require('./model/Order');
const OrderItem = require('./model/OrderItem');
const Review = require('./model/Review');
const Category = require('./model/Category');


//routes
const routebag=require('./Router/bags');
const routeorderItem=require('./Router/orderItems');
const routeorders=require('./Router/orders');
const routereview=require('./Router/reviews');
const routeuser=require('./Router/users');
const routelogin=require('./Router/user')

app.use('/',routebag);
app.use('/orderItems',routeorderItem);
app.use('/orders',routeorders);
app.use('/reviews',routereview);
app.use('/users',routeuser);
app.use('./login',routelogin);



app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})


