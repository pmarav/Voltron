const router = require('express').Router();


router.route('/').get((req,res) => {
    const { Client } = require('pg');
    var connectionString = "postgres://postgres:1234@localhost:5432/tl";
    const client = new Client({connectionString: connectionString});
    client.connect().then(()=>{
        res.status(200).json( {status:'OK'} );
    })
    .catch((err)=>{
        res.status(503).send('Failed to connect to the database');
    });
});

module.exports = router;