/**
 * Random strings generator
 *
 * Generate array of random strings (a-Z, 0-9, a-Z0-9)
 *
 * Author: Matej Lednár
 */

/**
 * Generate array of random strings (a-Z, 0-9, a-Z0-9)
 *
 * @param {number} stringLength - undefined random (1-10 static), number (fixed string length), 0 (dynamic string length)
 * @param {number} charType  - default 1 (a-Z), 2 (0-9), 3 (a-Z0-9)
 * @param {number} stringType - default 0 mix, 1 lowercase, 2 uppercase
 * @param {number} generate - undefined generates 50 strings
 * @returns {string[]}
 */
function generateData(stringLength, charType, stringType, generate) {
  let finalResult = [];
  const charactersAZ = "abcdefghijklmnopqrstuvwxyz";
  const characters09 = "0123456789";
  let characters = "";
  charType = charType ? charType : 1;

  switch (charType) {
    case 1:
      characters = charactersAZ;
      break;
    case 2:
      characters = characters09;
      break;
    case 3:
      characters = charactersAZ + characters09;
      break;
  }

  let strLength =
    stringLength || stringLength == 0
      ? stringLength
      : Math.floor(Math.random() * 9 + 1);

  /**
   * Generate a random string
   *
   * @param {number} length -string length
   * @returns {string}
   */
  function generateString(length) {
    let result = "";
    const charsLength = characters.length;

    for (let i = 0; i < length; i++) {
      stringType = stringType ? stringType : 0;

      switch (stringType) {
        case 0:
          lowerCase = Math.floor(Math.random() * 2) == 1 ? true : false;
          break;
        case 1:
          lowerCase = true;
          break;
        case 2:
          lowerCase = false;
          break;
      }

      let char = characters.charAt(Math.floor(Math.random() * charsLength));

      result += lowerCase ? char : char.toUpperCase();
    }

    return result;
  }

  // generate variable string (1-10 characters per string)
  generate = generate ? generate : 50;
  let strLen = strLength;
  for (let i = 0; i < generate; i++) {
    // dynamic string length
    if (strLength == 0) {
      strLen = Math.floor(Math.random() * 9 + 1);
    }
    finalResult.push(generateString(strLen));
  }
  return finalResult;
}

console.log(generateData());
console.log(generateData(0));
console.log(generateData(5));
console.log(generateData(5, 2));
console.log(generateData(5, 3));
console.log(generateData(5, 3, 0));
console.log(generateData(5, 3, 1));
console.log(generateData(5, 3, 2));
console.log(generateData(20, 3, 2, 10));
