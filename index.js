var express = require("express");
var app = express();

app.get("/", (_, res)=> {
    res.send("Hello World ...")
});

app.listen(8081, () => console.log("app listening in port 8081"));