const router = require('express').Router();


router.get('/', (req, res)=>{
    res.send("Todo API")
})


module.exports = router;


