function sumAverage() {
    var list = document.getElementById("list").value;
    var splitList = list.split(",");
    let Sum = 0;
    let Average = 0;
    for(i = 0 ; i < splitList.length ; i++){
          Sum += parseInt(splitList[i]);
    }
    Average = Sum/splitList.length;
    let sum=document.getElementById("Sum")
    let average =document.getElementById("Average")
    sum.innerHTML = "Sum:   "+Sum;
    average.innerHTML = "Average:   "+Average;
    var list=document.getElementById("list").value="";
  }