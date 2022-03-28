const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const cors = require("cors");

dotenv.config()

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=> console.log("DB Connection Successfull!"))
    .catch((err)=> (console.log(err))
    );
    
const corsOptions ={
    origin:'*', 
    credentials:true,            
    //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
    
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)



app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend server is running!");
})

