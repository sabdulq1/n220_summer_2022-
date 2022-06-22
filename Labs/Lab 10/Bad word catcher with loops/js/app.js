let badwords = ["clear","water","tires"];
let count;

function CHECK(){
     count = 0;
     sentence = document.getElementById("sentence").value;
     let splitSentence = [];
     splitSentence = sentence.split(" ");

     for(let i = 0; i < badwords.length; i++) {

        for(let j = 0; j < splitSentence.length; j++){
       
            if(splitSentence[j] == badwords[i]) {
 
                count++;

            }
            
        }
        
    }


    if (count == 0) {

        let dvOutput=document.querySelector("#dvOutput");
        let dvOutput1=document.querySelector("#dvOutput1")
        let a1=document.getElementById("a1")
        dvOutput.style.display="block";
        dvOutput1.style.display="none";
        dvOutput.innerHTML = "We did not found any bad word in your sentence";
        dvOutput.style.color="green";
        a1.style.display="block";

    }

    else {

        let dvOutput=document.querySelector("#dvOutput");
        let dvOutput1=document.querySelector("#dvOutput1")
        let a=document.getElementById("a")
        dvOutput.style.display="none";
        dvOutput1.style.display="block";
        dvOutput1.innerHTML = "We found bad words in your sentence <br/>Total bad words we found are : " + count ;
        dvOutput1.style.color="red";
        a.style.display="block";

    }

    document.getElementById("sentence").value = "";

};