const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var first_name = process.argv[2];
var last_name = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  lookup();
});


function lookup(){
  client.query(`SELECT *
                FROM famous_people
                WHERE first_name ILIKE  '${first_name}' OR
                      last_name ILIKE '${last_name}'`, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

  console.log("Searching ...");
  console.log(`Found ${result.rowCount} persons by the name '${first_name}'`)
  let count = 1;

  result.rows.forEach(obj => {
    console.log(`- ${count}: ${obj.first_name} ${obj.last_name}, born '${obj.birthdate.toLocaleString().slice(0,8)}'`)
    count++;
  })
    client.end();
  });
}
