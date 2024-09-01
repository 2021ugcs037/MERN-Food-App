const mongoose = require('mongoose');
const {Schema} = mongoose;

const food_itemsSchema = new Schema({
    CategoryName:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
   image:{
      type:String,
      required:true
    },
    options:[{
        half:{
            type:Number      
        },
        full:{
        type:Number
        },
    }
    ],
    description:{
        type:String,
        required:true
        
    }
  
})

module.exports = mongoose.model('food_items',food_itemsSchema);