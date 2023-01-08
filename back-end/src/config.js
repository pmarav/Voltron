const { Client } = require('pg');

var connectionString = "postgres://postgres:1234@localhost:5432/tl";

const client = new Client({connectionString: connectionString});

client.connect().then(()=>{
    console.log('Database is up');
})
.catch((err)=>{
    console.log(err);
});

module.exports = {client};