var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.send("<div><h2>Declaration</h2><p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has <br> been copied manually or electronically from any other source <br><br> Name: <span style='background-color: yellow'> Nolan Smith </span> <br><br> Student Number: <span style='background-color: yellow'> 101664217 </span> <br></p><a href=/test1>Go to test1</a></div>");
});

app.get("/test1", (req, res) => {
    res.sendfile(__dirname + "/pages/test1.html");
});

app.listen(HTTP_PORT, onHttpStart);
