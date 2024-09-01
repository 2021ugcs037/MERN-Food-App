const express = require('express');
const router = express.Router();
const User = require('../Schema/User');
const {body, validationResult} =  require('express-validator'); 
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');






router.post("/createuser",[
    body('email').isEmail().withMessage('please Enter valid email'),
    body('name').isLength({min : 5}),
    body('password', 'Incorrect password').isLength({min : 5})

]
, async (req,res) =>{
   console.log("i reached comtroller")
      // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
 // Hashing by bcrypt and  jsonwebtoken
   const salt = await bcrypt.genSalt(10);
   let secPassword = await bcrypt.hash(req.body.password, salt);

 

console.log("i am here")

 try{
  const {name,email,password}=req.body;
  await User.create({
       name:name,
       //branch:branch,
       //DateofJoining:DateofJoining,
       email:email,
      //  password:password(Ye bina hash value ke Password save ho jayega)
      password:secPassword
       
   }).then(res.json({success : true,data:req.body }))
}
   catch(err){
    console.log(err)
    res.send("registration failed");
    res.json({success : false})


   }
})

module.exports = router;
