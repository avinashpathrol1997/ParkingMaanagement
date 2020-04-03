var express = require("express");
var ejs = require("ejs");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./docs/swagger.json');

var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);

// mongoose.connect('mongodb://localhost/park',
//{ useNewUrlParser: true , useFindAndModify:false , useUnifiedTopology: true});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const store = new MongoDBStore({
  uri: `mongodb://localhost/parkingDB`,
  collection: "sessions"
});

mongoose.connect(
  `mongodb://localhost/parkingDB`,
  { useNewUrlParser: true , useFindAndModify:false , useUnifiedTopology: true}
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {});

app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));

var index = require("./routes/index");
app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

// listen on port 3000
app.listen(3003, function() {
  console.log("Connect using http://localhost:3003/api-docs");
});
