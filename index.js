var express = require('express');
var app = express();
app.get('/', function (req, res) {
 res.send("Heello from semaphore!!!");
});
app.listen(process.env.PORT || 3000);
module.exports = app;
