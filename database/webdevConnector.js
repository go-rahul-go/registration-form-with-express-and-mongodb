const mongoose = require("mongoose")


const url = "mongodb://127.0.0.1:27017/codingtribes";

let _schema = mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    gender:String,
    course:String,
    phone:String,
    email:String
})

 async function insertData(){
    await mongoose.connect(url);

    return mongoose.model("webdevs",_schema);
    
}


module.exports = insertData;