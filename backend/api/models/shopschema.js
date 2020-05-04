const mongoose=require('mongoose');
const shopSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required:true
        

    },
    latitude:{
        type: Number,
        required:true
        
    },
    longitude:{
        type: Number,
        required:true
        
    },
    image1:{
        type: String,
        required:true
        
    },   
    image2:{
        type: String,
        required:true
        
    },
    image3:{
        type: String,
        required:true
        
    },
    image4:{
        type: String,
        required:true
        
    },
    description:{
        type: String,
        required:true
        
    },
    avgrating:{
        type: Number,
        required:true
        
    },
   
    

    
});
module.exports=mongoose.model('Shop',shopSchema);