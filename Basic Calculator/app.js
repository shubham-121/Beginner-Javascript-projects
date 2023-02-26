let screen=document.getElementById('screen')
let buttons=document.querySelectorAll('button')
let screenValue='' //variable to store button data

for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText)

        if(buttonText=='X')
        {
            buttonText='*';
            screenValue+=buttonText
            screen.value=screenValue;


        }
        else if(buttonText=='C')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
             screen.value=eval(screenValue)
        }

        else{
            screenValue +=buttonText
            screen.value =screenValue;
        }

       
    })
}