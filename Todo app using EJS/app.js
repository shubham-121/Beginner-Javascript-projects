const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs"); //use ejs as its view engine. using ejs template
// for using ejs, create a new folder "views",this is where ejs will search for the files to render
// create an .ejs file in views folder

var items=["cooking","buy food", "eat food"];

app.get("/", (req, res) => {
  var today = new Date();
 
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  }

  var day=today.toLocaleDateString("en-us",options)
 
  res.render("list", { kindOfDay: day , newListItems: items  });

});

// add item to your todo list 

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/views/list.ejs")
})

app.post('/',(req,res)=>{
   item=req.body.newItem;
   items.push(item)

  console.log(item);

 // res.render("list",{newListItem:item})  
 //throws error //we heave to provide both variables i.e kindOfDay and newListItem

 res.redirect('/');//redirect the post req to home(/) route

})

app.listen(3000, (req, res) => {
  console.log("server started at port 3000");
});





