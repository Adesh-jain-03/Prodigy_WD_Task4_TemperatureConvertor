function convertTemperature() {
  const input = parseFloat(document.getElementById("temperatureInput").value);
  const fromUnit = document.getElementById("unitFrom").value;
  const toUnit = document.getElementById("unitTo").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.innerText = "Please enter a valid number.";
    return;
  }

  let result;

  // Convert input to Celsius first
  let tempInCelsius;
  if (fromUnit === "celsius") {
    tempInCelsius = input;
  } else if (fromUnit === "fahrenheit") {
    tempInCelsius = (input - 32) * 5/9;
  } else if (fromUnit === "kelvin") {
    tempInCelsius = input - 273.15;
  }

  // Convert from Celsius to target unit
  if (toUnit === "celsius") {
    result = tempInCelsius;
  } else if (toUnit === "fahrenheit") {
    result = (tempInCelsius * 9/5) + 32;
  } else if (toUnit === "kelvin") {
    result = tempInCelsius + 273.15;
  }

  resultDiv.innerText = `Result: ${result.toFixed(2)} °${unitSymbol(toUnit)}`;
}

function unitSymbol(unit) {
  switch(unit) {
    case "celsius": return "C";
    case "fahrenheit": return "F";
    case "kelvin": return "K";
    default: return "";
  }
}
