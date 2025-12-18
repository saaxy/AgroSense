// Profile button navigation
let profileBtn = document.getElementById('profile_button');
profileBtn.addEventListener('click', () => {
    window.location.href = '../profile/profile.html';
});

// Crop Suggestions button navigation
let cropSuggestionsBtn = document.getElementById('crop_advice');
cropSuggestionsBtn.addEventListener('click', () => {
    window.location.href = '../crop_advice/advice.html';
});

// Fertilizer Recommendations button navigation
let fertilizerBtn = document.getElementById('fertilizer_recommendation');
fertilizerBtn.addEventListener('click', () => {
    window.location.href = '../fertilizer/fertilizer.html';
});

// Cost Calculator button navigation
let costCalcBtn = document.getElementById('cost_calculator');
costCalcBtn.addEventListener('click', () => {
    window.location.href = '../cost_calculator/calc.html';
});

//Logout button navigation
let logoutBtn = document.getElementById('Logout_button');
logoutBtn.addEventListener('click', () => {
    window.location.href = '../auth/login.html';
});