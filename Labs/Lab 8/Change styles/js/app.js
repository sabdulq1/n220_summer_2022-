
// bringing alll the user inputs
let txtName0 = document.querySelector("#txtName0");
let txtName1 = document.querySelector("#txtName1");
let txtName2 = document.querySelector("#txtName2");
let txtName3 = document.querySelector("#txtName3");
let txtName4 = document.querySelector("#txtName4");
let txtName5 = document.querySelector("#txtName5");
let txtName6 = document.querySelector("#txtName6");
let txtName7 = document.querySelector("#txtName7");
// Things to take place when the Create button is clicked
function Create() {
    // setting variables for each inputs
    let a= txtName0.value;
    let b= txtName1.value;
    let c= txtName2.value;
    let d= txtName3.value;
    let e= txtName4.value;
    let f= txtName5.value;
    let g= txtName6.value;
    let h= txtName7.value;
    // bringing divs by id

    var dvOutput = document.getElementById("dvOutput")
    // setting width
    dvOutput.style.width=a+"px";
    // setting height
    dvOutput.style.height=b+"px";
    // setting borderRadius
    dvOutput.style.borderRadius=c+"px";
    // setting backgroundColor
    dvOutput.style.backgroundColor=d;
    // setting text color
    dvOutput.style.color=e;
    // setting text
    dvOutput.innerHTML=f;
    // setting textAlign
    dvOutput.style.textAlign=g;
    // setting fontFamily
    dvOutput.style.fontFamily=h;
    // displaying div
    dvOutput.style.display="block";
    // scrolling to the div
    dvOutput.scrollIntoView();
    
}
// Things to take place when the Retry button is clicked
 function Retry() {
    // bringing divs by id
    var main = document.getElementById("main");
    var dvOutput = document.getElementById("dvOutput")
    // setting input areas to none/orignal position
    txtName0.value="";
    txtName1.value="";
    txtName2.value="";
    txtName3.value="";
    txtName4.value="";
    txtName5.value="";
    txtName6.value="center";
    txtName7.value="URW Chancery L, cursive";
    // erasing  div
    dvOutput.style.display="none";
    // scrolling to the main div
    main.scrollIntoView();


}