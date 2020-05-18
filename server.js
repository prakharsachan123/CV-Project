var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/dist/resume-builder-angular"));
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/resume-builder-angular/index.html");
})

app.listen(process.env.PORT || 8000);