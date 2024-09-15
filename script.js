let rangeSlider = document.getElementById("rangeSlider");
let sliderValue = document.getElementById("sliderValue");
let passwordBox = document.getElementById("passwordBox");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generateBtn = document.getElementById("generateBtn");
let copyIcon = document.getElementById("copyIcon");

// Set initial slider value
sliderValue.textContent = rangeSlider.value;

// Update slider value display
rangeSlider.addEventListener('input', () => {
    sliderValue.textContent = rangeSlider.value;
});

// Generate password when button is clicked
generateBtn.addEventListener('click', () => {
    passwordBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let anyNumbers = "0123456789";
let anySymbols = "~!@#$%^&*";

// Function to generate password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    // Add characters based on checked options
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? anyNumbers : "";
    allChars += symbols.checked ? anySymbols : "";

    // If no options are selected, return an empty string
    if (allChars === "") {
        return genPassword;
    }

    // Generate the password based on the selected length
    for (let i = 0; i < rangeSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}


// Copy generated text
copyIcon.addEventListener('click', () => {
    if(passwordBox.value != "" || passwordBox.value.length >= 1) {
        navigator.clipboard.writeText(passwordBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "file_copy";
            copyIcon.title = "";
        }, 3000)
    }
});