function Answer(clicked) {
    let a = "A mean-o-acid";
    b="<br/><br/>"
    c="Ok! I know it was a bad one"
    var ChangeColor = document.getElementById(clicked);
    let dvOutput =document.getElementById("dvOutput")
    if (clicked=="Amino acid"){//here it check if value is correct
        dvOutput.innerHTML = "It's Correct Answer:- "+a+b+c ; //message to div for user
        ChangeColor.style.backgroundColor = ChangeColor.dataset.color;
        dvOutput.style.color="green";
    }
    else{    
        var ChangeColor = document.getElementById(clicked.id);
        dvOutput.innerHTML = "Its Incorrect.<br/> Correct answer is :- "+a+b+c //message to div for user
        clicked.style.backgroundColor = clicked.dataset.color;
        dvOutput.style.color="red";
        ChangeColor.style.backgroundColor = ChangeColor.dataset.color;
    }
    }        
        