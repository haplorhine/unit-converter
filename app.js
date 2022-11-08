const convertForm = document.querySelector("#convert-form");
const inputField = document.querySelector("#input-field");


convertForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputField.value);
    // convertForm.reset();
});