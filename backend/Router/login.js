const express = require('express');
const router = require('./Usercreate');
const {body, validationResult} =  require('express-validator'); 
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../Schema/User');

const jwtSecret = "myNameisKhan";


router.post("/loginUser",[
    body('email').isEmail().withMessage('please Enter valid email'),
    body('password', 'Incorrect password').isLength({min : 5})

], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    try{
       let userData =  await User.findOne({email})
       if(!userData)
       {
         return res.status(400).json({ errors : "Try Logging with correct credentials"});
       }
       // compare function in bcrypt convert into Hash value and matches to the password in DB, it return true or false

       const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
       if(!pwdCompare)
       {
          return res.status(400).json({error : "Password galat daal rahe ho bhai "})
       }
       const data = {
            user:{
              id: userData.id
            }
       }
       const authToken = jwt.sign(data,jwtSecret);

       res.json({success : true, authToken})


    }
    catch(errors)
    {
        console.log(errors)
        res.json({success : false})
    }
   
} )

module.exports = router