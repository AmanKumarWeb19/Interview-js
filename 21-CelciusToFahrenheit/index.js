/** How to convert celsius to Fahrenheit or Fahrenheit to Celsius?
 * Standard formula:-
 * Celsius to Fahrenheit formula:--
 *  Fahrenheit = celsius * 1.8 + 32
 *
 * Fahrenheit to Celsius:-
 * celsius = 5/9 * (Fahrenheit -32)
 */

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
let celsiusRes = celsiusToFahrenheit(30);
console.log(celsiusRes);

function FahrenheitToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 9.5;
}
let FarhenRes = FahrenheitToCelsius(70);
console.log(FarhenRes);
