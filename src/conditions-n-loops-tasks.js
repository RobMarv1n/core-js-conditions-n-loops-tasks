/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const numbers = [a, b, c];
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > count) count = numbers[i];
  }
  return count;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) return false;
  if (a === b && a * 2 > c) return true;
  if (a === c && a * 2 > b) return true;
  if (b === c && b * 2 > a) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNum = '';
  if (num >= 10) {
    const tens = Math.floor(num / 10);
    if (tens === 1) romanNum += 'X';
    if (tens === 2) romanNum += 'XX';
    if (tens === 3) romanNum += 'XXX';
  }
  switch (num % 10) {
    case 1:
      romanNum += 'I';
      break;
    case 2:
      romanNum += 'II';
      break;
    case 3:
      romanNum += 'III';
      break;
    case 4:
      romanNum += 'IV';
      break;
    case 5:
      romanNum += 'V';
      break;
    case 6:
      romanNum += 'VI';
      break;
    case 7:
      romanNum += 'VII';
      break;
    case 8:
      romanNum += 'VIII';
      break;
    case 9:
      romanNum += 'IX';
      break;
    default:
      break;
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let strNumber = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0 && i < numberStr.length) strNumber += ' ';
    if (numberStr[i] === '-') strNumber += 'minus';
    if (numberStr[i] === '.' || numberStr[i] === ',') strNumber += 'point';
    switch (numberStr[i]) {
      case '0':
        strNumber += 'zero';
        break;
      case '1':
        strNumber += 'one';
        break;
      case '2':
        strNumber += 'two';
        break;
      case '3':
        strNumber += 'three';
        break;
      case '4':
        strNumber += 'four';
        break;
      case '5':
        strNumber += 'five';
        break;
      case '6':
        strNumber += 'six';
        break;
      case '7':
        strNumber += 'seven';
        break;
      case '8':
        strNumber += 'eight';
        break;
      case '9':
        strNumber += 'nine';
        break;
      default:
        break;
    }
  }
  return strNumber;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverStr += str[i];
  }
  return str === reverStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = String(num);
  for (let i = 0; i < strNum.length; i += 1) {
    if (+strNum[i] === digit) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length <= 2) return -1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
    leftSum = 0;
    rightSum = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const fullSize = size * size;
  const matrix = [];

  for (let i = 0; i <= size - 1; i += 1) {
    matrix[i] = [];
  }

  let column = 0;
  let lastColumn = size - 1;
  let row = 0;
  let lastRow = size - 1;

  for (let num = 1; num <= fullSize; ) {
    for (let j = row; j <= lastColumn; j += 1, num += 1) {
      matrix[row][j] = num;
    }
    row += 1;

    for (let j = row; j <= lastRow; j += 1, num += 1) {
      matrix[j][lastColumn] = num;
    }
    lastColumn -= 1;

    for (let j = lastColumn; j >= column; j -= 1, num += 1) {
      matrix[lastRow][j] = num;
    }
    lastRow -= 1;

    for (let j = lastRow; j >= row; j -= 1, num += 1) {
      matrix[j][column] = num;
    }
    column += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const cloneMatrix = JSON.parse(JSON.stringify(matrix));
  const rotatedMatrix = matrix;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      rotatedMatrix[i][matrix.length - 1 - j] = cloneMatrix[j][i];
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length === 0) return arr;
  const sortedArr = arr;
  const p = arr[0];
  const sortedLeft = [];
  const sortedRight = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < p) {
      sortedLeft[sortedLeft.length] = arr[i];
    } else {
      sortedRight[sortedRight.length] = arr[i];
    }
  }
  const result = [...sortByAsc(sortedLeft), p, ...sortByAsc(sortedRight)];
  for (let i = 0; i < arr.length; i += 1) {
    sortedArr[i] = result[i];
  }
  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let shuffleStr = str;
  let cycle = 0;
  function getCycle(iteration) {
    for (let i = 0; i < iteration; i += 1) {
      let startStr = '';
      let endStr = '';
      for (let j = 0; j < str.length; j += 1) {
        if (j % 2 === 0) {
          startStr += shuffleStr[j];
        } else {
          endStr += shuffleStr[j];
        }
      }
      startStr += endStr;
      shuffleStr = startStr;
      if (shuffleStr === str) {
        cycle = i + 1;
        break;
      }
    }
    return cycle;
  }
  cycle = iterations % getCycle(iterations);

  if (cycle > 0) {
    for (let i = 0; i < cycle; i += 1) {
      let startStr = '';
      let endStr = '';
      for (let j = 0; j < str.length; j += 1) {
        if (j % 2 === 0) {
          startStr += shuffleStr[j];
        } else {
          endStr += shuffleStr[j];
        }
      }
      startStr += endStr;
      shuffleStr = startStr;
    }
  }

  return shuffleStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numArr = Array.from(String(number), Number);
  if (numArr.length <= 1) return number;
  let smaller = 0;
  let indexSmaller = 0;
  let find = false;
  for (let i = numArr.length - 1; i > 0; i -= 1) {
    if (numArr[i - 1] < numArr[i] && !find) {
      smaller = numArr[i - 1];
      indexSmaller = i - 1;
      find = true;
    }
  }
  if (!find) return number;

  let bigger = 0;
  const biggerArr = [];
  for (let i = indexSmaller; i < numArr.length; i += 1) {
    if (numArr[i] > smaller) {
      biggerArr.push(numArr[i]);
    }
  }
  biggerArr.sort((a, b) => a - b);
  bigger = biggerArr[bigger];

  let indexBigger = 0;
  find = false;
  for (let i = numArr.length - 1; i > 0; i -= 1) {
    if (numArr[i] === bigger && !find) {
      indexBigger = i;
      find = true;
    }
  }

  [numArr[indexSmaller], numArr[indexBigger]] = [
    numArr[indexBigger],
    numArr[indexSmaller],
  ];

  const sortTail = numArr
    .filter((el, index) => index > indexSmaller)
    .sort((a, b) => a - b);
  numArr = [
    ...numArr.filter((el, index) => index < indexSmaller + 1),
    ...sortTail,
  ];

  return +numArr.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
