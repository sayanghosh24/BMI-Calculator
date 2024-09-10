const form = document.querySelector("form");
const pointerImage = document.querySelector(".secondimage img");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.querySelector('#age').value);
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector("#results");

    results.innerHTML = ""; 

    if (isNaN(age) || age <= 0 || age > 120) { 
        results.innerHTML = "<span>Please provide a valid age between 1 and 120.</span>";
        return;
    }

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "<span>Please provide a valid height.</span>";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "<span>Please provide a valid weight.</span>";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    // Adjust the angle calculation to make the pointer rotate proportionally to the BMI value
    const minBMI = 10; // Minimum possible BMI value
    const maxBMI = 40; // Maximum possible BMI value
    const minAngle = -45; // Minimum rotation angle for the pointer
    const maxAngle = 45;  // Maximum rotation angle for the pointer

    // Ensure BMI stays within a reasonable range
    const constrainedBMI = Math.max(minBMI, Math.min(bmi, maxBMI));

    // Calculate the angle based on the BMI value
    const angle = minAngle + ((constrainedBMI - minBMI) / (maxBMI - minBMI)) * (maxAngle - minAngle);

    // Apply the rotation to the pointer image
    pointerImage.style.transform = `rotate(${angle}deg)`;
});
