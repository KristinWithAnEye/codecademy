const input = "Did you see that whale flip the boat?";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    } 
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);