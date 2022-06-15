let txtName = document.querySelector("#txtName");
let txtName1 = document.querySelector("#txtName1");
let txtName2 = document.querySelector("#txtName2");
txtName.placeholder="Enter Username";
txtName1.placeholder="Enter Password";
txtName2.placeholder="Conform Password";


function password() {
    let a= txtName1.value;
    let b= txtName2.value;
    var dvOutput1 = document.getElementById("dvOutput0");
    var dvOutput = document.getElementById("dvOutput");
    var dvOutput1 = document.getElementById("dvOutput1");
    if(a==b){
        dvOutput.style.display="block";
        dvOutput1.style.display="none";
        dvOutput0.innerHTML = "Congratulations " + txtName.value;
        txtName.placeholder="Enter Username";
        txtName1.placeholder="Enter Password";
        txtName2.placeholder="Conform Password";
        txtName.value="";
        txtName1.value="";
        txtName2.value="";

    }
    else{
        dvOutput.style.display="none";
        dvOutput1.style.display="block";
        dvOutput0.innerHTML = "Sorry " + txtName.value;
        txtName.placeholder="Enter Username";
        txtName1.placeholder="Enter Password";
        txtName2.placeholder="Conform Password";
        txtName.value="";
        txtName1.value="";
        txtName2.value="";
    }
}