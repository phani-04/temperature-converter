function convertTemperature() {
    var temperatureInput = document.getElementById('temperature-input').value;
    var fromUnitSelect = document.getElementById('from-unit-select');
    var toUnitSelect = document.getElementById('to-unit-select');
    var fromUnit = fromUnitSelect.options[fromUnitSelect.selectedIndex].value;
    var toUnit = toUnitSelect.options[toUnitSelect.selectedIndex].value;
    var resultElement = document.getElementById('result');
  
    var convertedTemperature;
  
    if (fromUnit === toUnit) {
      convertedTemperature = parseFloat(temperatureInput);
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      convertedTemperature = parseFloat(temperatureInput) - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
    }
  
    resultElement.textContent = convertedTemperature.toFixed(2) + " " + toUnit;
  }
  