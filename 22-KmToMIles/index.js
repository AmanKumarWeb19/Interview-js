/** How to convert Km into Miles in Javascript?
 * Conversion of Km to Miles:--
 * 1 Kilometers=0.621371
 * miles = kilometers*factor
 */

function KmToMiles(km) {
  const conversionFactor = 0.621371;
  return km * conversionFactor;
}

let res = KmToMiles(3);
console.log(res.toFixed());
