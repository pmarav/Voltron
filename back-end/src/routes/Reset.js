const router = require('express').Router();


router.route('/').post((req,res) => {
    const {client} = require('../config');
    var query = `select * from reset()`;
    client.query(query,(err,queryResult)=>{
        if(err) throw err;
        res.status(200).json({status:'OK'});
    })
});

module.exports = router;