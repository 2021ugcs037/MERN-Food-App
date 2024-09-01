const express = require('express');
const router = express.Router()
const Order = require('../Schema/Order');
const { reset } = require('nodemon');

router.post('/orderData', async(req,res) => {
    let{ email,order_data,order_date} = req.body;
    console.log(order_data)
     order_data.splice(0,0, {order_date: order_date})

    //find for email Id is either exist in DB or not
    let eId = await Order.findOne({'email':email})
    console.log(eId);

    if(eId == null){
        try{
            await Order.create({
                email:email,
                order_data : [order_data]
            }).then(() => {
                res.json({success : true})
            })
        }
        catch(error)
        {
            console.log(error.message)
            res.send("Server Error", error.message);
        }

    }
    else{
        try{
            await Order.findOneAndUpdate({email: req.body.email},
            { $push : {order_data: order_data}})
            .then(() => {
                res.json({success : true})
            })
        }
        catch(error){
            res.send("server Error", error.message);
        }
    }
})

router.post('/myOrderData', async(req,res) => {
    try{
      let myData = await Order.findOne({'email': req.body.email})
      res.json({orderData:myData})


    }
    catch(error)
    {
    //   res.send("Error message",error.message);
    res.status(500).json({ error: error.message });

    }
   })



module.exports = router;
