function calculate(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter the number1: "))
    console.log(num1);
    let num2=Number(prompt("Enter the number 2 "));
    console.log(num2);
    let sum,subs,mult,div;
    //display the sum
    sum=num1+num2;
    console.log(sum);
    //display the subs 
    sum=num1-num2;
    console.log(sum);
    //display the mult
    sum=num1*num2
    console.log(sum);
    //display the div
    sum=num1/num2
    console.log(sum);

     document.getElementById("results").innerHTML=`
        <p>${num1} + ${num2} = ${sum}</p>
        <p>${num1} - ${num2} = ${sum}</p>
        <p>${num1} * ${num2} = ${sum}</p>
        <p>${num1} / ${num2} = ${sum}</p>`
}
