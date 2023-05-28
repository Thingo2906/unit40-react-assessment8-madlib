
 // add comma every 3 digits, only for integer

function addCommas(nums) {
  let res = nums < 0 ? "-" : "";

  function handleInteger(integerString) {
    let str = "";
    let digit = 0;
    // It mean the lagest value of index is equal to (string length -1)
    // starts a loop that iterates over the digits of the input integer from the rightmost digit to the leftmost digit.
    for (let i = integerString.length - 1; i >= 0; i--) {
      str += integerString[i];
      digit += 1;
      if (i === 0) {
        continue;
      }
      // add comma every 3 digits, only for integer
      if (digit % 3 === 0) {
        str += ",";
      }
    }
    return str.split("").reverse().join("");
  }

  if (!Number.isInteger(nums)) {
    let arr = Math.abs(nums).toString().split(".");
    let integerString = arr[0];
    let bonusString = arr[1];
    return res + handleInteger(integerString) + "." + bonusString;
  } else {
    return res + handleInteger(Math.abs(nums).toString());
  }
}
let result = addCommas(-12345.67);
// Print the result
console.log(result);

module.exports = addCommas;
