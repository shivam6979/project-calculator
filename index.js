let screen =document.getElementById("screen");   //take screen(it a input tag)
buttons=document.querySelectorAll("button");
let screenValue ="";                             //screenValue is a variable and it's a string
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("text",buttonText)
//--------------------------------- logic --------------------------------
        if(buttonText=="X"){
            buttonText="*";
            screenValue += buttonText;
            screen.value=screenValue
        }
        else if(buttonText == "C"){
            screenValue = "";
            screen.value=screenValue
        }
        else if(buttonText == "="){
            screen.value= eval(screenValue)  // eval is js function which evaluates the value
            if(buttonText=="X" && buttonText=="/" && buttonText=="+" && buttonText=="-"){
                screen.value=screenValue

            }else{
                screenValue = "";

            }
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue
        }

})
}