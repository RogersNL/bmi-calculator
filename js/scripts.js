var bmi = function(weight, height) {
  return (weight / (height*height))*(703);
};

var weight = parseFloat(prompt("Enter your weight in lb"));
var height = parseFloat(prompt("Enter your height in inches"));
var result = bmi(weight, height);
alert("Your BMI is " + result.toPrecision(3) + " kg/m^2");
