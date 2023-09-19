const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
var methodOverride = require("method-override");

const app = express();
const port = 3000;

const Route = require("./route");
const db = require("./config/db");
//connect to mongoDB
db.connect();

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));

//use for req.body (form)
app.use(
  express.urlencoded({
    extended: true,
  })
);
//use for req.body (fetch, axios)
app.use(express.json());

//http logger
// app.use(morgan('combined'))

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "view"));

//Routes init
Route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
