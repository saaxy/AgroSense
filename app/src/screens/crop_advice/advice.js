
// connect html file to python 

async function getCrop(){
    const data = {

        // data that will sent to python as json

        N : document.getElementById("N").value,
        P : document.getElementById("P").value,
        K : document.getElementById("K").value,
        temperature: document.getElementById("temp").value,
        humidity: document.getElementById("humidity").value,
        ph : document.getElementById("ph").value,
        rainfall : document.getElementById("rainfall").value

    };
    // URL still needs to be added heref
    const response = await fetch("URL", {
        method: "POST",  //used for sending data
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)   //converts js object ->JSON string before sending to flask
    });

    const result = await response.json();
    document.getElementById("result").innerText = "✅ Recommended Crop: " + result.recommended_crop;   //to display crop on page
}

document.getElementById("Crop-Form").addEventListener("submit", function(e){
    e.preventDefault(); //stops page reload
    getCrop();
});

//back to main page 
const HomeBtn =  document.getElementById("return");
HomeBtn.addEventListener('click',(event)=>{
    window.location.href = '../main_page/index.html';
})