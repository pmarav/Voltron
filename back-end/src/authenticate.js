const { client } = require('./config.js');

function authenticate(token)
{
    return new Promise((resolve,reject)=>{
        const query = {
            text : 'select tokens.key,users.admin from tokens inner join users on tokens.username=users.username where key=$1',
            values : [token]
        }
        client.query(query,(err,queryResult)=>{
            if(err) throw err;
            if(queryResult.rowCount>0)
                (queryResult.rows[0]['admin']) ? resolve(2) : resolve(1);
            else 
                resolve(0);
        })
    })
}

module.exports = {authenticate};