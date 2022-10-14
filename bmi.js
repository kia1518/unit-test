//Weight in KG
//Height in CM

function calculateBMI(weight, height) {
    const BMI = weight / (height / 100) ** 2;
    let result;
  
    if (BMI < 18.5) {
      result = "underweight";
    } else if (BMI > 18.5 && BMI < 24.9) {
      result = "normal";
    } else if (BMI > 25 && BMI < 29.9) {
      result = "overweight";
    } else {
      result = "obese";
    }
  
    return result;
  }
  
  module.exports = calculateBMI;