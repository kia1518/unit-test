// Convert Farenheit to Celcius

function calculateCelcius(farenheit) {
    const celsius = (farenheit -32) * 5/9;
    let result;
  
    if (celsius < 35) {
      result = "The person is cold.";
    } else if (celsius > 35 && celsius < 37) {
      result = "normal";
    } else if (celsius > 37) {
      result = "sick";
    } else {
      result = "wrong input";
    }
  
    return result;
  }
  
  module.exports = calculateCelcius;