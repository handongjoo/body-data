const express = require('express');

const app = express();
const port = 3000;

app.get('/querystring', (req, res) => {
    res.send("쿼리스트링");
});

app.post('/body-formdata', (req, res) => {
    res.send("body-formdata");
});

app.post('/body-multipart', (req, res) => {
    res.send("body-multipart");
});

app.post('/body-json', (req, res) => {
    res.send("body-json");
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});