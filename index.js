var express = require("express");
var mysql = require("mysql");
var bodyparser = require("body-parser");
var path = require("path");
const { connect } = require("http2");

var pda = express();
pda.set("view engine", "ejs");
pda.use(express.static(path.join(__dirname, "/public")));
pda.use(bodyparser.urlencoded({ extended: true }));

var con = mysql.createConnection({
  hostname: "localhost",
  user: "root",
  password: "type your database password(leave blank if there isn't any)",
  database: "pda_db",
});

pda.get("/", function (err, results) {
  results.render("menu1");
});

pda.post("/check", function (req, res) {
  var sem = req.body.semester;
  var chk = req.body.vtunumber1;
  switch (sem) {
    case "1":
      con.query(
        "SELECT * FROM sem1 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "2":
      con.query(
        "SELECT * FROM sem2 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "3":
      con.query(
        "SELECT * FROM sem3 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "4":
      con.query(
        "SELECT * FROM sem4 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "5":
      con.query(
        "SELECT * FROM sem5 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "6":
      con.query(
        "SELECT * FROM sem6 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "7":
      con.query(
        "SELECT * FROM sem7 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
    case "8":
      con.query(
        "SELECT * FROM sem8 where usn = ?",
        chk,
        function (err, results) {
          if (results[0] == undefined) {
            res.send("ERR_REGISTRATION_NOT_FOUND");
          } else {
            var f = results[0].fname;
            var m = results[0].mname;
            var l = results[0].lname;
            var v = results[0].usn;
            var p = results[0].mobile;
            res.render("check", {
              fname: f,
              mname: m,
              lname: l,
              vtunumber: v,
              phonenumber: p,
            });
          }
        }
      );
      break;
  }
});
//********************************* SEM 1 **************************************************************
pda.get("/sem1", function (req, res) {
  res.render("student_registration");

  pda.post("/sem1", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem1 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//********************************* SEM 2 **************************************************************
pda.get("/sem2", function (req, res) {
  res.render("student_registration");

  pda.post("/sem2", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem2 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//********************************* SEM 3 **************************************************************

pda.get("/sem3", function (req, res) {
  res.render("student_registration");

  pda.post("/sem3", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem3 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//*********************************SEM 4**************************************************************

pda.get("/sem4", function (req, res) {
  res.render("student_registration");

  pda.post("/sem4", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem4 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//*********************************SEM 5**************************************************************

pda.get("/sem5", function (req, res) {
  res.render("student_registration");

  pda.post("/sem5", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem5 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//*********************************SEM 6**************************************************************

pda.get("/sem6", function (req, res) {
  res.render("student_registration");

  pda.post("/sem6", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem6 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//*********************************SEM 7**************************************************************

pda.get("/sem7", function (req, res) {
  res.render("student_registration");

  pda.post("/sem7", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem7 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

//*********************************SEM 8**************************************************************

pda.get("/sem8", function (req, res) {
  res.render("student_registration");

  pda.post("/sem8", function (req, res) {
    var student = {
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      usn: req.body.vtunumber,
      mobile: req.body.phonenumber,
    };

    con.query("INSERT INTO sem8 SET ?", student, function (err, results) {
      if (err) throw err;
      res.render("done");
    });
  });
});

pda.listen(8080, function () {
  console.log("Server Online ...");
});
