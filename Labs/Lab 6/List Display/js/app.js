let collectonsDiv = document.getElementById("collectonsDiv");
let collectons = [
  { collectons: "Diffrent country Currency's", one: "USA", two: "UK" ,three: "CANADIAN" ,four: "INDIAN" ,
  five: "SWEDISH" },
  { collectons: "Diecast model collectons", one: "MUSTANG", two: "GTR" ,three: "VIPER" ,four: "SUBARU" ,
  five: "AVENTADOR" },
  { collectons: "Movie collecton", one: "AVATAR", two: "TITANIC" ,three: "HARRY POTTER" ,four: "FROZEN" ,
  five: "SKYFALL" },
];
function mycollectons() {
  for(let i = 0; i < collectons.length; i++) {
    let newEl = document.createElement("div");
    if (i ==0){
      newEl.style.backgroundColor="red";
    }
    else if (i ==1){
      newEl.style.backgroundColor="blue";
    }
    else if (i ==2){
      newEl.style.backgroundColor="orange";
    }
    newEl.innerHTML = collectons[i].collectons + ": " + collectons[i].one +", " + collectons[i].
    collectons+", " + collectons[i].three+", " + collectons[i].four+", " + collectons[i].five;
    newEl.classList.add("score");
    collectonsDiv.appendChild(newEl);
  }
}