const mongoose = require("mongoose");
const { Schema } = mongoose;

const food_categorySchema = new Schema({
  CategoryName: {
    type:String,
    required:true
  }
})

module.exports = mongoose.model('food_category',food_categorySchema,'food_category');



