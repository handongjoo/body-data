const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

// 쿼리스트링으로 데이터 주고받기
app.get('/querystring', (req, res) => {
    const {id} = req.query
    res.send({id});
});

app.post('/body-formdata', (req, res) => {
    res.send("body-formdata");
});

app.post('/body-multipart', (req, res) => {
    res.send("body-multipart");
});

//body에 json형태로 데이터를 삽입하여 보내줌
app.post('/body-json', (req, res) => {
    //객체구조분해할당으로 여러가지 데이터를 한 문장으로 작성하여 받아올 수 있음
    const {id, password} = req.body
    res.json({id,password})
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

