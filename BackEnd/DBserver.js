const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const escapeHtml = require("escape-html");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const app = express();
const port = 4000;

//เข้ารหัสแบบ 64
const { base64encode, base64decode } = require("nodejs-base64");
//Connect Mysql phpmyadmin
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "roomforrent",
});

//รูปของ Server ที่มีอยู่
const {
  DiskStorage,
  processMiddleware,
  uploadMiddleware,
} = require("express-image-server");
const diskStorage = new DiskStorage({
  dest: path.resolve(__dirname, "./public", "roomimage"),
});

//set Cors
app.use(cors());
//seticon
app.use(favicon("./public/room.ico"));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: true,
  })
);

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
    res.redirect("/AdminLogin");
  }
}

app.get("/", (req, res, next) => {
  res.send("หลังบ้าน");
});
app.get("/roomimage/:id", processMiddleware({ storage: diskStorage }));

app.get("/DataRoom", (req, res) => {
  const getid = req.query.idroom;
  if (getid) {
    con.query(
      "SELECT * FROM ordermeetingroom Where ID='" + getid + "'",
      function (err, data) {
        return res.json(JSON.parse(JSON.stringify(data)));
      }
    );
  } else {
    con.query("SELECT * FROM ordermeetingroom", function (err, data) {
      return res.json(JSON.parse(JSON.stringify(data)));
    });
  }
});

app.post("/InsertRoom", (req, res) => {
  const { roomid, name, lname, email, phone, item, totalday } = req.body;
  if ((name, lname, email, phone)) {
    con.query(
      "INSERT INTO rentroomhistory (Roomname,Name,LastName,Email,Phone,BorrowItems,Day) VALUES('" +
        roomid +
        "','" +
        name +
        "','" +
        lname +
        "','" +
        email +
        "','" +
        phone +
        "','" +
        item +
        "','" +
        totalday +
        "')",
      function (err, data) {
        if (err) {
          res.json("Fail" + err);
        } else {
          res.json("Success");
        }
      }
    );
  }
});

app.get("/AdminLogin", (req, res) => {
  res.render("Login");
});

//Check Permission Username,password
app.post("/CheckLogin", (req, res, next) => {
  const { user, pass } = req.body;
  req.session.user = user;
  //Query Data from Database
  con.query("SELECT * FROM admin", function (err, data) {
    const setdata = JSON.parse(JSON.stringify(data));
    if (err) {
      res.send("Server Error Query");
      throw err;
    }
    if (setdata[0].User == user && setdata[0].Pass == pass) {
      req.session.name = setdata[0].Name;
      res.send("Success");
    } else {
      res.send("Fail");
    }
    //If true web redirect to /AdminMain If not true redirec to /AdminLogin
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
  con.query("SELECT * FROM rentroomhistory",function(er,data){
    if(er){
      console.log("Error")
      throw er
    }else{
      const setdata1 = JSON.parse(JSON.stringify(data));
      const senddata1 = { history: setdata1,nameadmin:name };
      res.render("Main_Login", senddata1 );
    }
    
  })
  
});

app.get("/AdminMain", (req, res, next) => {
  res.redirect("/AdminLogin");
});
app.get("/MeetingRoom", isAuthenticated, (req, res, next) => {
  var i;
  con.query("SELECT * FROM orderroom", function (er, data, field) {
    if (er) throw er;
    const setdata = JSON.parse(JSON.stringify(data));
    const senddata = { datasend: setdata };
    res.render("MeetingRoom", senddata);
  });
});
app.get("/MeetingRoom", (req, res, next) => {
  res.render("Login");
});

app.get("/InserDataRoomMeetinwg", (req, res) => {
  const nameRoom = req.query.name;
  console.log(nameRoom);
});

app.get("/AdminHome");
app.listen(port, () => {
  console.log(`Server Online อยู่บน PORT: ${port}`);
});
