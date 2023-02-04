const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./user.db', sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err)
})

const sql = `CREATE TABLE user(ID INTEGER PRIMARY KEY, username, password)`;
db.run(sql);