const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3000;
const url = require('url');

app.use(cors())
app.use(express.static(path.join(__dirname, '/../dist')));

// ************* Old Code using sqlite database **************
// let sql;


// const sqlite = require('sqlite3').verbose();
// const db = new sqlite.Database('./user.db', sqlite.OPEN_READWRITE, (err) => {
//   if (err) return console.error(err)
// })

// app.post('/users', (req, res) => {
//   console.log('posting...')
//   try{
//     const { username , password } = req.query;
//     sql = "INSERT INTO user(username, password) VALUES (?,?)";
//     db.run(sql, [username, password], (err) => {
//       if (err) return res.json({status: 300, success: false, error: err });
//       console.log(`successfully added username: ${username} with password: ${password}`);
//     });
//     return res.json({
//       status: 200,
//       success: true
//     });
//   } catch (error) {
//     return res.json({
//       status: 400,
//       success: false
//     })
// }})

// app.get('/users', (req, res) => {
//   console.log('getting...')
//   sql = `SELECT * FROM user`
//   try {
//     const query = url.parse(req.url, true).query; // query paramaters
//     if (query.username) sql += ` WHERE username = '${query.username}'`
//     db.all(sql, [], (err, rows) => {
//       if (err) return res.json({status: 300, success: false, error: err });
//       return res.json({
//         data: rows,
//         status: 200,
//         success: true
//       });
//     })
//   } catch (error) {
//       return res.json({
//         status: 400,
//         success: false
//     })
//   }
// })

// **************** New Code with switch statements *********

app.post('/users', (req, res) => {
  console.log('posting...')
  try{
    console.log('SUCCESSFUL POST REQUEST!')
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

app.get('/users', (req, res) => {
  console.log('getting...')
  const { username } = req.query;
  console.log(username)
  var password;
switch (username) {
  case 'joeblow':
    password = 'mypassword';
    break;
  case 'JohnSmith':
    password = "12345678";
    break;
  case 'test_user1':
    password = "admin";
    break;
  default:
    password = "x";
}

  try {
    return res.json({
        password: password,
        status: 200,
        success: true
      });
  } catch (error) {
      return res.json({
        status: 400,
        success: false
    })
  }
})




app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})