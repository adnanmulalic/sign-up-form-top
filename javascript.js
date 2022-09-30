const password = document.querySelector("[name='password']");
const confirmPassword = document.querySelector("[name='confirm-password']");
const hiddenParagraph = document.querySelector("#hidden-paragraph");
let passOne = "";
let passTwo = "";

password.addEventListener("keyup", () => {
    passOne = password.value;
    if (passOne && passTwo != "" && passTwo === passOne) {
        password.style.outline = "1px solid green";
        confirmPassword.style.outline = "1px solid green";
        hiddenParagraph.setAttribute("hidden", "");
    } else {
        password.style.outline = "1px solid red";
        confirmPassword.style.outline = "1px solid red";
        hiddenParagraph.removeAttribute("hidden");
    }
});
confirmPassword.addEventListener("keyup", () => {
    passTwo = confirmPassword.value;
    if (passTwo && passOne != "" && passTwo === passOne ) {
        password.style.outline = "1px solid green";
        confirmPassword.style.outline = "1px solid green";
        hiddenParagraph.setAttribute("hidden", "");
    } else {
        password.style.outline = "1px solid red";
        confirmPassword.style.outline = "1px solid red";
        hiddenParagraph.removeAttribute("hidden");
    }
});