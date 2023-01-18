//const Home = require("./View/index.html")
const path = require("path");
const express = require("express");
const app = express();
const port = 4000;
const Swal = require("sweetalert2");
var bodyParser = require("body-parser");
var escapeHtml = require("escape-html");
const flash = require("express-flash-notification");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//Connect MongoDB
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://root:1234@roomforrent.37ow2mf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: true,
  })
);
app.use(flash(app));

//Pull value form HTML Form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");

// ฟังค์ชันเช็คว่า User ได้ทำการ Login แล้วหรือยัง
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
    return console.log("ผ่าน");
  } else {
    next("route"), res.redirect("/AdminLogin");
  }
}

app.get("/", (req, res) => {
  res.send("หลังบ้าน");
});

app.get("/AdminLogin", (req, res) => {
  res.render("Login");
});
app.post("/CheckLogin", (req, res, next) => {
  const { user, pass1 } = req.body;
  req.session.user = user;
  client.connect((err) => {
    // perform actions on the collection object
    async function run() {
      const selectdb = client.db("Room");
      const selectcol = selectdb.collection("Admin");
      // Query for a movie that has the title 'The Room'
      const query = {};

      const options = {
        // sort matched documents in descending order by rating

        // Include only the `title` and `imdb` fields in the returned document
        projection: { _id: 0, name: 1, user: 1, pass: 1 },
      };
      const data = await selectcol.findOne(query, options);
      // since this method returns the matched document, not a cursor, print it directly
      if (req.session.user == data.user) {
        req.session.name = data.name;
        res.redirect("/AdminMain");
        client.close();
      } else {
        res.redirect("/AdminLogin");
        client.close();
      }
    }
    run().catch(console.dir);
  });
});

app.post("/Logout", (req, res, next) => {
  req.session.user = null;
  req.session.name = null;
  req.session.save(function (err) {
    if (err) next(err);

    //กันไว้หาก Session เกิดการ Error
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/AdminLogin");
    });
  });
});

app.get("/AdminMain", isAuthenticated, (req, res, next) => {
  const name = req.session.name;
  res.render("Main_Login", { name });
});

app.get("/AdminMain", (req, res, next) => {
  res.redirect("/AdminLogin");
});
app.get("/MeetingRoom", isAuthenticated, (req, res, next) => {
  res.render("MeetingRoom");
});
app.get("/AdminHome");
app.listen(port, () => {
  console.log(`Server Online อยู่บน PORT: ${port}`);
});
