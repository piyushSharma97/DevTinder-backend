const express = require("express");
const connectDB = require('./Config/db')
const dotenv = require("dotenv");
const {userAuth} =require('./middleware/auth')
const app = express();
const User = require('./Models/user')
dotenv.config({});
const PORT = process.env.PORT

app.use(express.json());

app.post('/signup',(req,res)=>{
 const userObj= {
    firstName:'sadasd',
    lastName:'sdfsd',
    emailId:'piyushH.cp',
    age:25,
    gender:"male",
    password:'2131233'

 }
 const user = new User(userObj);
 user.save()
 res.send('complete')
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
  })
connectDB().then(()=>{
    try{
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on port ${PORT}`)
            })
    }catch (error) {
        console.log(error);
      }
}).catch((err)=>{
    console.log('err',err)
})

