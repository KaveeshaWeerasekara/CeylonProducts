const mongoose= require ("mongoose");


const Schema=mongoose.Schema;


const blogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"loginusers",   //reference collection from database
        required:true,
    }
});

module.exports = mongoose.model("blogs", blogSchema);  
// export default mongoose.model("blogs",blogSchema);