const mongoose = require("mongoose");
const DB = process.env.DATABASE_URI;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Database connection successful");
}).catch((error)=>{
    console.log(error);
})