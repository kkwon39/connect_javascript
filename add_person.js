const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database
    }
});

var first_name = process.argv[2];
var last_name = process.argv[3];
var date = process.argv[4];

function addPerson(){
  knex('famous_people').insert({
    first_name:first_name,
    last_name:last_name,
    birthdate: date
  })
  .then(function(rows) {})
  .catch(function(error){console.error(error)});
}

addPerson();

