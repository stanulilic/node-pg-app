const { Pool } = require("pg");

const pool = new Pool({
  user: "fish_user",
  host: "localhost",
  database: "fish",
  password: "password",
  port: 5432,
});

pool.query("SELECT NOW() as now", (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);
  }
});

module.exports = { pool };
