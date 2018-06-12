var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var numTables = 5;


// Example Reservation (DATA)
// =============================================================
var reservations = [
  {
    name: "Smith",
    phone: "555 867 5309",
    email: "smiths@email.com",
    id: 1000
  }
];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});


app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "/make.html"));
});

app.get("/check/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "/view.html"));
});

app.post("/api/tables", function (req, res) {
  cosole.log("IN app.post")
  console.log(req.body);
  if (i < 5) {
    var table = $('<li class="list-group-item">');

    table.append(`
<p>Name: ${data[i].name}</p>
<p>Phone: ${data[i].phone}</p>
<p>Email: ${data[i].email}</p>
<p>Unique Code:${data[i].code}</p>
`)

    $('.reserve-list').append(table);
  }
});

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});