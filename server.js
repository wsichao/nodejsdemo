const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors()) // 允许跨域
app.use(express.json()) // 解析json格式的数据
app.use(express.urlencoded({ extended: false })) // 解析表单数据,只能解析 application/x-www-form-urlencoded 格式的数据
app.use('/wscApi',require('./router')) // 路由
app.use((err,req,res,next)=> { // 错误处理
  res.status(500).send({ message: err.message })
})
app.listen(8080,()=> {
  console.log('server is running');
})