const mongoose = require("mongoose");
const studschema = new mongoose.Schema({
    Studentname:{
        type:String,
        required:true
    },
    Register_no:{
        type:Number,
        required:true,
        unique:true
    },
    Department:{
        type:String,
        required:true,
        unique:true
    }
});
const Stud = mongoose.model("Student_details",studschema );
module.exports = Stud;
