let heightInput = document.querySelector(".container .height input");
let weightInput = document.querySelector(".container .weight input");
let calculateBtn = document.querySelector(".container .calculate-btn");
let bmiText = document.querySelector(".container .result-box .bmi h3");
let resultBox = document.querySelector(".container .result-box");
let halth_status = document.querySelector(".container .result-box .result");

calculateBtn.addEventListener("click", () => {
  if (heightInput.value != " " && weightInput != " ") {
    calculateBmi();
  }
});

let calculateBmi = () => {
  let weightvalue = weightInput.value;
  let heightvalue = heightInput.value;

  let bmi = (weightvalue / Math.pow(heightvalue / 100, 2)).toFixed(1);

  if (bmi < 18.5) {
    halth_status.innerHTML = "You are Underweight";
    halth_status.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    halth_status.innerHTML = "You are Normal Weight";
    halth_status.style.color = "#4ac38d";
  } else if (bmi >= 25 && bmi <= 29.9) {
    halth_status.innerHTML = "You are Over Weight";
    halth_status.style.color = "#ff884d";
  } else {
    halth_status.innerHTML = "You are in the obese range";
    halth_status.style.color = "#ff5e57";
  }
  bmiText.innerHTML = bmi;
  resultBox.style.display = "block";
};
