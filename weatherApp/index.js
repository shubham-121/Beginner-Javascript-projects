const { json } = require("express");
const express=require("express");
const https=require("https");
const bodyParser=require("body-parser")



const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")


})

app.post("/",(req,res)=>{
 

 const query=req.body.cityName
const apikey="3f0ba2cda532537afe2edd6e8071362e"
const units="metric"

const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" +apikey+ "&units="+units;

    

    https.get(url, function(response){     //get data from the api
        console.log(response)              //prints a whole lot of bunch stuff
        console.log(response.statusCode)

        response.on("data",(data)=>{     //perform some task on the data which you got fromm the request
            console.log(data)    //getting data from the url   data will be in hexadecimal format
            const weatherData=JSON.parse(data)//converting hexa data to json format
           console.log(weatherData);

           const temp=weatherData.main.temp; //getting temp from json data
           console.log(temp);

           const location=weatherData.name
           console.log(location);

           const weatherDescription=weatherData.weather[0].main
           console.log(weatherDescription);

           const icon=weatherData.weather[0].icon
           const iconurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"

           

           res.write("<p>The location is:</p>"+location)               //when you want to print multiple data on webpage use res.write(), then use res.send() for final call
           res.write("<h1>the temperature is:" +temp+" degree celsius </h1>"  )             //send multiple html lines using res.write()
           res.write("<img src=" +iconurl+">");
           res.send();




           //console.log( , JSON.stringify(weatherData)  );//converts the json into string
        })
})


})







app.listen(3000,function(){
    console.log("server started at 3000")
})