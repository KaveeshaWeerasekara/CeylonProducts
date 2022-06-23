const mongoose= require ("mongoose");


const Schema=mongoose.Schema;


const reportSchema=new Schema({
    productNum:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        // ref:"loginusers",   //reference collection from database
        required:true,
    }
});

module.exports = mongoose.model("reportProducts", reportSchema);  
