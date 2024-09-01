const express = require('express');
const cors=require('cors');
const app = express();
const port = 5000;
const mongoDB = require('./db');





mongoDB();
app.use(express.json())

app.use(
    cors({
      origin: ["http://localhost:3000", "https://food-app-frontend-sigma.vercel.app"],
    })
  );

// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3000","https://food-app-frontend-sigma.vercel.app"]);
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

app.use("/api", require("./Router/Usercreate"));

app.use("/api", require("./Router/DisplayData"));
app.use("/api", require("./Router/OrderData"));
app.use("/api", require("./Router/login"));

app.listen(port , () =>{
    console.log(`app is listen on port ${port}`);
})

// Middle for Router by Thapa technical

