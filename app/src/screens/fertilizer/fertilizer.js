// Sample data for fertilizers based on crop type
const fertilizers = {
    "wheat": ["Urea", "DAP", "Potash"],
    "rice": ["NPK", "Ammonium Sulfate", "Zinc Sulfate"],
    "cotton": ["Urea", "MOP", "Gypsum"],
    "maize": ["NPK", "Urea", "Ammonium Nitrate"]
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let cropType = document.getElementById('crop-type').value.toLowerCase();
    // console.log("Selected Crop Type: ", cropType);
    // console.log("Event listened successfully");
    const recommendedFertilizers = document.getElementById('recommendation-output');
    recommendedFertilizers.innerHTML = cropType !="select" ?
        `Recommended Fertilizers for ${cropType}: <br> - ${fertilizers[cropType].join(' , ')}` :
        "Please select a valid crop type.";
});

const HomeBtn = document.getElementById('back-button');
HomeBtn.addEventListener('click', (event) => {
    window.location.href = '../main_page/index.html';
});