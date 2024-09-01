const express = require('express');
const router = express.Router()

router.get('/foodData', (req,res) => {
    try{
        // console.log(global);
       res.send([global?.foodItem,global?.food__Category])
    }
    catch(error){
        console.error(error.message)
        res.send("Some Techinical Error or Server Error");

    }
})

module.exports = router;