const convertForm = document.querySelector("#convert-form");
const inputField = document.querySelector("#input-field");

const lengthOutput = document.querySelector("#length p");
const volumeOutput = document.querySelector("#volume p");
const massOutput = document.querySelector("#mass p");

const gallonsPerLiter = 0.26417;
const feetPerMeter = 3.281;
const poundPerKilogram = 2.2046;



const litersToGallons = (liters) => {
    const gallons = liters * gallonsPerLiter;
    return gallons;
}

const gallonsToLiters = (gallons) => {
    const liters = gallons / gallonsPerLiter;
    return liters;
}

const metersToFeet = (meters) => {
    const feet = meters * feetPerMeter;
    return feet;
}

const feetToMeters = (feet) => {
    const meters = feet / feetPerMeter;
    return meters;
}

const kilogramsToPounds = (kilograms) => {
    const pounds = kilograms * poundPerKilogram;
    return pounds;
}

const poundsToKilograms = (pounds) => {
    const kilograms = pounds / poundPerKilogram;
    return kilograms;
}


convertForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = +inputField.value;
    const feet = metersToFeet(inputValue).toFixed(3);
    const meters = feetToMeters(inputValue).toFixed(3);

    const liters = gallonsToLiters(inputValue).toFixed(3);
    const gallons = litersToGallons(inputValue).toFixed(3);

    const kilos = poundsToKilograms(inputValue).toFixed(3);
    const pounds = kilogramsToPounds(inputValue).toFixed(3);

    lengthOutput.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`
    volumeOutput.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
    massOutput.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`;
    // convertForm.reset();
});


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/