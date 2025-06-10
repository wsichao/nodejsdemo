const express = require('express')
const cors = require('cors')
const joi = require('joi')
const app = express()
app.use(cors()) // 允许跨域
app.use(express.json()) // 解析json格式的数据
app.use(express.urlencoded({ extended: false })) // 解析表单数据,只能解析 application/x-www-form-urlencoded 格式的数据

app.use((req,res,next)=> { // 中间件
  res.cc = function(err,status=1) { // 自定义响应函数
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next() // 调用下一个中间件
})

app.use('/wscApi',require('./router')) // 路由
app.use((err,req,res,next)=> { // 错误处理
  res.status(500).send({ message: err.message })
})
app.use((err,req,res,next)=> {
  if (err instanceof joi.ValidationError) { // 判断错误类型是否为 Error 类型
    return res.cc(err) 
  }
  res.cc(err)
})
app.listen(8080,()=> {
  console.log('server is running');
})