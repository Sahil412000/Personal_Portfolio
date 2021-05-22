const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }
})

const Client = new mongoose.model("Client",employeeSchema);
module.exports = Client;