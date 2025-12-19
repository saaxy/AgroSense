function getAdvice(){
    const soil = document.getElementById("soil").value;
    const season = document.getElementById("season").value;
    const water = document.getElementById("water").value;
    const region = document.getElementById("region").value;

    if(soil ==="" || season === "" || water ==="" || region ===""){
          result.innerHTML = "Please select all field";
          result.style.color = red;
          return;
    }

    let crops =[];

    
}