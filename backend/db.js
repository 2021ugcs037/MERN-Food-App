const mongoose = require('mongoose');
const FoodItems=require("./Schema/FoodItem");
const FoodCategory = require('./Schema/FoodCategory');

function mongoDB() {
  // Define the database connection URI
  const dbURI = 'mongodb+srv://2021ugcs022:2021ugcs022@clusterfooddelievery.ngtsa8e.mongodb.net/gofoodmern'; // Replace with your database URI

  // Connect to the MongoDB database
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });


  const run=async()=>{
    try{
      const foodItem = await  FoodItems.find({});
      global.foodItem = foodItem;
      //console.log(foodItem);
}
    catch(err)
    {
      console.log(err);
    }
  }

  run();


const bhag =async () => {
  try{
    //console.log("schema",FoodCategories)
    const food__Category = await FoodCategory.find({});
    global.food__Category = food__Category;
    //console.log("this is food ategory",food__Category);

  }
  catch(err)
  {
    console.log("Unable to fetch data from foodCategory");

  }

}

bhag();


  // //Error handler for MongoDB connection
  // mongoose.connection.on('error', (error) => {
  //   console.error('Error connecting to the database:', error);
  // });

  // // Successful connection handler
  // mongoose.connection.once('open', async() => {
  //   console.log('Connected to the database');

  //   // Access the "food_items" collection using Mongoose model or connection
  //   const FoodItems = await mongoose.connection.collection("food_items");
    

  //   // console.log(FoodItems)
  //   // Fetch and log the data from the "food_items" collection
  //   FoodItems.find({}).toArray(async function(err, data) {
  //     if (err) {
  //       console.error('Error fetching data:', err);
  //     } else {
  //       console.log('Fetched data:', data);
  //       global.food_items = data;
  //       console.log(global.food_items);
  //     }

  //     // Close the database connection
  //     mongoose.connection.close();
  //   });
  // });
}

// Call the mongoDB function to initiate the connection and fetch data
mongoDB();
module.exports = mongoDB;
