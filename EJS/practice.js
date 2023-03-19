const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");


app.get("/",(req,res)=>{

    var today=new Date();
    var currDay=today.getDay();
    day=""

    switch (currDay) {
        case 0:
            day="sunday"
            break;
            case 1:
            day="monday"
            break;
            case 2:
            day="tuesday"
            break;
            case 3:
            day="wednesday"
            break;
            case 4:
            day="thursday"
            break;
            case 5:
            day="friday"
            break;
            case 6:
            day="saturday"
            break;
            
    
        default:
            console.log("error caused by"+currDay);
            break;
    }

   
    res.render("list", { kindOfDay: day });
    
})

app.listen(3000,(req,res)=>{
 console.log("server live")
})