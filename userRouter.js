const db = require('./db/index')
const bcrypt = require('bcrypt')
exports.regUser = (req, res) => {
  let {username, password, email} = req.body;
  const sqlstr = `select * from ev_users where username=?`;
  db.query(sqlstr, username, (err, results) => {
    if (err) {
      res.cc({
        message: err.message,
      });
      return
    }
    if (results.length > 0) {
      res.cc({
        message: '用户名被占用，请更换其他用户名！',
      });
      return
    }
    password = bcrypt.hashSync(password, 10)
    const sqlinsert = `insert into ev_users set ?`;
    db.query(sqlinsert, {username, password, email}, (err, results) =>{
      if (err) {
        res.cc({
          message: err.message,
        });
        return
      }
      if (results.affectedRows !== 1) {
        res.cc({
          message: '注册用户失败，请稍后再试！',
        });
        return
      }
      res.send({
        status: 0,
        message: '注册成功！',
        code: 200
      });
    })
  })
  
}
exports.login = (req, res) => {
  res.send('loginOk')
}