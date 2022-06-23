const mongoose= require ("mongoose");


const Schema=mongoose.Schema;


const blogSchemaNew=new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
   
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    // user:{
    //     type:mongoose.Types.ObjectId,
    //     ref:"loginusers",   //reference collection from database
    //     required:true,
    // }
});

module.exports = mongoose.model("blogSchemaNew", blogSchemaNew);  
// export default mongoose.model("blogs",blogSchema);