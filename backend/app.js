const express = require('express');
const app = express();
const port = 3000;


const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./user.db', sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err)
})

app.use(express.json())


app.post('/users', (req, res) => {
  console.log('posting')
  try{
    console.log(req.query.username, 'added with password:', req.query.password)
    return res.json({
      status: 200,
      success: true
    });
  } catch (error) {
    return res.json({
      status: 400,
      success: false
    })
}})

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})