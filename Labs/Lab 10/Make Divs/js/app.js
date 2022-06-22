function displayDivs(){
      let objects = [
            { color: "#FF0000", height: 100, width: 300 },
            { color: "#FFFF00", height: 200, width: 200 },
            { color: "#ff0000", height: 300, width: 100 },
      ];
      for(i=0;i<objects.length;i++)    
      makeDiv(objects[i]);   
}
function makeDiv(i) {
      var div = document.createElement("div");    
      div.style.width = i.width+"px";
      div.style.height = i.height+"px";
      div.style.background=i.color;
      div.style.display="inline-block";
      div.style.marginTop="25px";
      div.style.marginInline="15px"
      div.innerHTML="loop of divs";
      document.body.appendChild(div);
      
    
}
    