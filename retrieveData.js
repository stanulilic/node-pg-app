const { pool } = require("./db");

async function readData() {
  try {
    const res = await pool.query("SELECT name, color from  shark");
    console.log(res.rows);
  } catch (error) {
    throw error;
  }
}

readData();
