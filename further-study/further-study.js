const Queue = require("../queue");
const Stack = require("../stack");

/** Reverses a string
 * ex: hello -> olleh
*/
function stringReversal(str) {
  const stack = new Stack();
  let reversed = "";

  for (const letter of str) {
    stack.push(letter);
  }
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

function balancedBrackets(str) {
}

function josephusSurvivor(peopleNum, skip) {
}

function calculator(input) {
}

module.exports = {
  calculator,
  josephusSurvivor,
  balancedBrackets,
  stringReversal,
};
