const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
var date=new Date();
var currDay=date.getDay();
var Day=""

switch (currDay) {
    case 0:
        Day="sunday"
        break;
        case 1:
        Day="Monday"
        break;
        case 2:
        Day="Tuesday"
        break;
        case 3:
        Day="Wednesday"
        break;
        case 4:
        Day="Thursday"
        break;
        case 5:
        Day="Friday"
        break;
        case 6:
        Day="Saturday"
        break;

    default:
        console.log("error due to:"+currDay);
        break;

    }
    res.render("list", {kindOfDay: Day})
})

app.listen(3000,(req,res)=>{
 console.log("server live")
})