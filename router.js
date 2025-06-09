const router = require('express').Router();
const userFun = require('./userRouter');
router.post('/login', userFun.login);
router.post('/reguser', userFun.regUser);
module.exports = router; 