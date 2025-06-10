const router = require('express').Router();
const userRouter = require('./userRouter');
const {reg_login_schema} = require('./schema/user');
const expressJoi = require('@escook/express-joi');

router.post('/login', userRouter.login);
router.post('/reguser', expressJoi(reg_login_schema), userRouter.regUser);
module.exports = router; 