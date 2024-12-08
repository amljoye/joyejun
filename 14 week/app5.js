const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log('첫 번째 미들웨어에서 요청 처리');
    res.send({name:'KSD',age:30})
})
app.listen(3000);