const pg = require("pg");
const settings = require("./settings");

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database
    }
});

var first_name = process.argv[2];
var last_name = process.argv[2];

function lookUp (){
knex.select('*')
    .from('famous_people')
    .where('first_name', 'ILIKE', first_name)
    .orWhere('last_name', 'ILIKE', last_name)
    .asCallback(function(err, rows) {
        if (err) return console.error(err);
        console.log("Searching ...");
        console.log(`Found ${rows.length} person(s) by the name '${first_name}'`)
        let count = 1;
        rows.forEach(obj => {
            console.log(`- ${count}: ${obj.first_name} ${obj.last_name}, born '${obj.birthdate.toLocaleString().slice(0,8)}'`)
            count++;
        })
    });
}

lookUp();