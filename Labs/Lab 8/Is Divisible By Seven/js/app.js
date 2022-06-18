// bringing the number user inputed
let txtName = document.querySelector("#txtName");

// Things to take place when the check button is clicked
function check() {
    // setting variables 
    let a= txtName1.value;
    let b= 0;
    // bringing divs by id
    var main = document.getElementById("main");
    var dvOutput = document.getElementById("dvOutput");
    var dvOutput1 = document.getElementById("dvOutput1");
    // i and i1 are ids for icons
    var i = document.getElementById("i");
    var i1 = document.getElementById("i1");
    // condition to check if number is divisvle by 7
    if(a % 7 ==b){
        // displaying the number is divisible by 7
        dvOutput.style.display="block";
        // making sue it does not display another div
        dvOutput1.style.display="none";
        // displaying icon
        i.style.display="inline";
        // changing main and div background color and text color
        main.style.backgroundColor="green";
        main.style.color="black"; 
        dvOutput.style.color="black";

    }
    else{
        // displaying the number is not divisible by 7
        dvOutput1.style.display="block";
        // making sue it does not display another div
        dvOutput.style.display="none";
        // displaying icon
        i1.style.display="inline";
        // changing main and div background color and text color
        main.style.backgroundColor="red";
        dvOutput1.style.color="black";
        main.style.color="black";
    }
}
// Things to take place when the Retry button is clicked
function Retry() {
    // bringing divs and icons by id
    var i = document.getElementById("i");
    var i1 = document.getElementById("i1");
    var main = document.getElementById("main");
    // setting input area to none
    txtName1.value="";
    // setting placeholder for input
    txtName1.placeholder="Enter number";
    // changing main background color and text color back to orignal
    main.style.backgroundColor="black";
    main.style.color=" rgb(224, 239, 17)";
    // making sue it does not display another div
    i.style.display="none";
    i1.style.display="none";

}