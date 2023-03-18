
//kharab file hai


const express=require("express")
const https=require("https")
const bodyParser=require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended:true}))     //to use body parser


app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})



app.post("/",(req,res)=>{
   
    app.get('/',(req,res)=>{

        const query="dehradun"
        const apikey="3f0ba2cda532537afe2edd6e8071362e"
        const units="metric"
    
        const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=" +apikey+ "&units="+units;
    
                
                const location=weatherdata.name
                console.log(location)
                
                // const condition=weatherdata.weather[0].main
                // console.log(condition);
                
                for(var i=0;i<2;i++)
                {
                    const condition=weatherdata.weather[i]
                 console.log(condition);
                 
                 // res.send(condition)
                }
    
    
                const icon=weatherdata.weather[0].icon
                const iconurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"
               
               
               // res.write("<img src="+iconurl+">")
               res.write("<p>The location is:</p>"+location)               //when you want to print multiple data on webpage use res.write(), then use res.send() for final call
               res.write("<h1>the temperature is:" +temp+" degree celsius </h1>"  )             //send multiple html lines using res.write()
               res.write("<img src=" +iconurl+">");
               res.send();
               
            })
         })
    
    
    })
    // app.get('/',(req,res)=>{
    //     res.send("server is running fine");
    // })
    
    console.log("post request received");
})


app.listen(3000,function(){
    console.log("server started at port 3000")
})