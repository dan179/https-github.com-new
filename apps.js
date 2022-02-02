let hunger=80;
let happiness=50;
let energy=40;

function displayInfo(){
    document.getElementById("hungerInfor").innerHTML=`JS-Hunger ${hunger}`;
    document.getElementById("happinessInfo").innerHTML=`JS-happiness ${happiness}`;
    document.getElementById("engeryInfo").innerHTML=`JS-energy ${energy}`;
}

function feed(){
    console.log("Feed function");
    
    //
    hunger=hunger-10;
    happiness=happiness+10
    //
    displayInfo();

}

function pet(){
    console.log("Pet function");
    happiness=happiness+10
}


function play(){
    console.log("Play funtion");
    hunger=hunger-10
    happiness=happiness+10
}

