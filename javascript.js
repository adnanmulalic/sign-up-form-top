const password = document.querySelector("[name='password']");
const confirmPassword = document.querySelector("[name='confirm-password']");
let passOne = "";
let passTwo = "";

password.addEventListener("change", () => {
    passOne = password.value;
});
confirmPassword.addEventListener("change", () => {
    passTwo = confirmPassword.value;
})