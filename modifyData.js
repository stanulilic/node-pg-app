const { pool } = require("./db");

async function modifyData() {
  const [id, name] = process.argv.slice(2);
  try {
    const res = await pool.query("UPDATE shark SET name = $1 WHERE id = $2", [
      name,
      id,
    ]);
    console.log(`Updated the shark name to ${name}`);
  } catch (error) {
    throw error;
  }
}

modifyData();
