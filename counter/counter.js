const decrementBtn = document.getElementById("decBtn");

const incrementBtn = document.getElementById("incBtn");

const resetBtn = document.getElementById("resetBtn");

const dispalyBtn = document.getElementById("displayValue");




// for decrement btn click 

decrementBtn.addEventListener("click",() =>{

    const value = Number(displayValue.innerText);

    if(value > 0){

        displayValue.innerText = value-1;
    }
    else{
        alert("Negative value not allowed");
    }

});


// for increment btn click

incrementBtn.addEventListener("click",() =>{


    const value = Number(displayValue.innerText);

    if(value >= 15){
        alert("15+ values are not allowed");
    }else{
        displayValue.innerText = value + 1;
    }

});


//  for reset button click 

resetBtn.addEventListener("click",() =>{

    displayValue.innerText = 0;
});