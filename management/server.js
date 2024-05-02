
const express = require("express");
const bodyParser = require("body-parser"); // body-parser 모듈을 require로 가져옵니다.

const app = express();
const port = process.env.PORT || 5000; // port 변수의 이름을 소문자로 변경합니다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // "extends" 대신 "extended"를 사용합니다.

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
