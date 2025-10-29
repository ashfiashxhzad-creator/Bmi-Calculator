function calculateBMI() {
            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;
            let bmi = weight / (height * height);

            let result = document.getElementById("result");

            if (bmi < 18.5) {
                result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Underweight) 😟<br> (Needs Nutrition 🍃💧)  ` ;
                result.style.color = "blue";
            } 
            else if (bmi >= 18.5 && bmi <= 24.9) {
                result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Normal) 😊 <br> Perfect Balance ✅🌿`;
                result.style.color = "green";
            } 
            else if (bmi >= 25 && bmi <= 29.9) {
                result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Overweight) 😐 <br> Extra Care ⚖️🫐`;
                result.style.color = "orange";
            } 
            else {
                result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (Obese) 😟 <br> High Alert 🚨🐳`;
                result.style.color = "red";
            }
        }
