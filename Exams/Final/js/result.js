const firstname=localStorage.getItem('first-name');

document.getElementById('result').textContent="hello  " +firstname;

function Create() {
    // setting variables for each inputs
    let a= "250px"
    let b= "250px";
    let d= "red";
    // let e= txtName4.value;
    // let f= txtName5.value;
    // let g= txtName6.value;
    // let h= txtName7.value;
    // bringing divs by id

    var dvOutput = document.getElementById("dvOutput")
    var dvOutput1 = document.getElementById("dvOutput1")
    var dvOutput2 = document.getElementById("dvOutput2")
    var dvOutput3 = document.getElementById("dvOutput3")
    // setting width
    dvOutput.style.width=a;
    // setting height
    dvOutput.style.height=b;
    // setting borderRadius
    // setting backgroundColor
    dvOutput.style.backgroundColor=d;
    // // setting text color
    // dvOutput.style.color=e;
    // // setting text
    // dvOutput.innerHTML=f;
    // // setting textAlign
    // dvOutput.style.textAlign=g;
    // // setting fontFamily
    // dvOutput.style.fontFamily=h;
    // // displaying div
    dvOutput.style.display="block";
    dvOutput1.style.display="none";
    dvOutput2.style.display="none";
    dvOutput3.style.display="none";
    // scrolling to the div    
}
function Create1() {
    // setting variables for each inputs
    let a= "250px"
    let b= "250px";
    let d= "red";
    // let e= txtName4.value;
    // let f= txtName5.value;
    // let g= txtName6.value;
    // let h= txtName7.value;
    // bringing divs by id

    var dvOutput = document.getElementById("dvOutput")
    var dvOutput1 = document.getElementById("dvOutput1")
    var dvOutput2 = document.getElementById("dvOutput2")
    var dvOutput3 = document.getElementById("dvOutput3")
    // setting width
    dvOutput1.style.width=a;
    // setting height
    dvOutput1.style.height=b;
    // setting borderRadius
    // setting backgroundColor
    dvOutput1.style.backgroundColor=d;
    // // setting text color
    // dvOutput.style.color=e;
    // // setting text
    // dvOutput.innerHTML=f;
    // // setting textAlign
    // dvOutput.style.textAlign=g;
    // // setting fontFamily
    // dvOutput.style.fontFamily=h;
    // // displaying div
    dvOutput.style.display="none";
    dvOutput1.style.display="block";
    dvOutput2.style.display="none";
    dvOutput3.style.display="none";
    // scrolling to the div    
}
function Create2() {
    // setting variables for each inputs
    let a= "250px"
    let b= "250px";
    let d= "red";
    // let e= txtName4.value;
    // let f= txtName5.value;
    // let g= txtName6.value;
    // let h= txtName7.value;
    // bringing divs by id

    var dvOutput = document.getElementById("dvOutput")
    var dvOutput1 = document.getElementById("dvOutput1")
    var dvOutput2 = document.getElementById("dvOutput2")
    var dvOutput3 = document.getElementById("dvOutput3")
    // setting width
    dvOutput2.style.width=a;
    // setting height
    dvOutput2.style.height=b;
    // setting borderRadius
    // setting backgroundColor
    dvOutput2.style.backgroundColor=d;
    // // setting text color
    // dvOutput.style.color=e;
    // // setting text
    // dvOutput.innerHTML=f;
    // // setting textAlign
    // dvOutput.style.textAlign=g;
    // // setting fontFamily
    // dvOutput.style.fontFamily=h;
    // // displaying div
    dvOutput.style.display="none";
    dvOutput1.style.display="none";
    dvOutput2.style.display="block";
    dvOutput3.style.display="none";
    // scrolling to the div    
}
function Create3() {
    // setting variables for each inputs
    let a= "250px"
    let b= "250px";
    let d= "red";
    // let e= txtName4.value;
    // let f= txtName5.value;
    // let g= txtName6.value;
    // let h= txtName7.value;
    // bringing divs by id

    var dvOutput = document.getElementById("dvOutput")
    var dvOutput1 = document.getElementById("dvOutput1")
    var dvOutput2 = document.getElementById("dvOutput2")
    var dvOutput3 = document.getElementById("dvOutput3")
    // setting width
    dvOutput3.style.width=a;
    // setting height
    dvOutput3.style.height=b;
    // setting borderRadius
    // setting backgroundColor
    dvOutput3.style.backgroundColor=d;
    // // setting text color
    // dvOutput.style.color=e;
    // // setting text
    // dvOutput.innerHTML=f;
    // // setting textAlign
    // dvOutput.style.textAlign=g;
    // // setting fontFamily
    // dvOutput.style.fontFamily=h;
    // // displaying div
    dvOutput.style.display="none";
    dvOutput1.style.display="none";
    dvOutput2.style.display="none";
    dvOutput3.style.display="block";
    // scrolling to the div    
}
//=====================================================//
// bringing the number user inputed
let txtName1 = document.querySelector("#txtName1");

// Things to take place when the check button is clicked
function check() {
    // setting variables 
    let a= txtName1.value;
    let b= 0;
    // bringing divs by id
    var dvOutput = document.getElementById("dvOutput");
    var dvOutput4 = document.getElementById("dvOutput4");
    var dvOutput5 = document.getElementById("dvOutput5");
    // i and i1 are ids for icons
    var i = document.getElementById("i");
    var i1 = document.getElementById("i1");
    // condition to check if number is divisvle by 7
    if(a % 7 ==b){
        // displaying the number is divisible by 7
        dvOutput4.style.display="block";
        // making sue it does not display another div
        dvOutput5.style.display="none";
        // displaying icon
        i.style.display="inline";
        // changing main and div background color and text color
        dvOutput.style.backgroundColor="green";
        dvOutput.style.color="black"; 
        dvOutput4.style.color="black";

    }
    else{
        // displaying the number is not divisible by 7
        dvOutput5.style.display="block";
        // making sue it does not display another div
        dvOutput4.style.display="none";
        // displaying icon
        i1.style.display="inline";
        // changing main and div background color and text color
        dvOutput.style.backgroundColor="red";
        dvOutput5.style.color="black";
        dvOutput.style.color="black";
    }
}
// Things to take place when the Retry button is clicked
function Retry() {
    // bringing divs and icons by id
    var i = document.getElementById("i");
    var i1 = document.getElementById("i1");
    var dvOutput = document.getElementById("dvOutput");
    var dvOutput4 = document.getElementById("dvOutput4");
    var dvOutput5 = document.getElementById("dvOutput5");
    dvOutput4.style.display="none";
    dvOutput5.style.display="none";
    // setting input area to none
    txtName1.value="";
    // setting placeholder for input
    txtName1.placeholder="Enter number";
    // changing main background color and text color back to orignal
    dvOutput.style.backgroundColor="black";
    dvOutput.style.color=" rgb(224, 239, 17)";
    // making sue it does not display another div
    i.style.display="none";
    i1.style.display="none";

}