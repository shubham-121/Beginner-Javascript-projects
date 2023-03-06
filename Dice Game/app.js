console.log('hi')

let randomNum1 =Math.floor(Math.random()*6)+1;

var randomDiceImage=  "dice"  +  randomNum1  +  ".png"

var randomImageSource= "images/"+ randomDiceImage  // choose randomly from image/dice1.png to dice6.png


var image1=document.querySelectorAll("img")[0]


image1.setAttribute("src",randomImageSource)




let randomNum2=Math.floor(Math.random()*6)+1;

var randomDiceImage2= "dice" + randomNum2 + ".png"; 

var randomImageSource2="images/" + randomDiceImage2;

var image2=document.querySelectorAll('img')[1]

image2.setAttribute('src',randomImageSource2);



//if player1 wins

if(randomNum1>randomNum2)
{
    document.querySelector('h1').innerHTML="Player 1 wins"
}

else if(randomNum1<randomNum2)
{
    document.querySelector('h1').innerHTML="Player 2 wins"
} 
else{
    document.querySelector('h1').innerHTML="Its a Draw. Try again"
}


