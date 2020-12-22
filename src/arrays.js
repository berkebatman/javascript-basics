const getNthElement = (index, array) => {
  let x = array[index];
  
  // for (let i = 0; i <= array.length; i++)
  // {
    if (index <= array.length) {
      return x;
   } else 
      setTimeout(getNthElement, 5);
  // }
 };


const arrayToCSVString = array => {
  let stringArray = array.toString();
  console.log(stringArray);
  return stringArray;
};

const csvStringToArray = string => {
  const csvArray = string.split(',');
  return csvArray;
};

const addToArray = (element, array) => {
   array.push(element);
   console.log(array);  //niye burda 'return array' kullandigimizda calismaz?
};


const addToArray2 = (element, array) => {
  // let array2 = [];
  const newArr = [
    ...array,
    element,
  ];
  // let array2 = [array.push(element.value)];
  return newArr;
  // console.log(array2);
  // console.log(array2);
  // console.log(array); 
};

const removeNthElement = (index, array) => {
  let removedItem = array.splice(index, 1);
  return removedItem; 
};

const numbersToStrings = numbers => {
  let x = numbers.map(String);
  return x;
};

const uppercaseWordsInArray = strings => {
  let x = strings.map(string => string.toUpperCase());
  return x;

};

const reverseWordsInArray = strings => {
  function reverseStr() {
  let spltStr = strings.split();
  let reverseArray = spltStr.reverse();   
  let x = reverseArray.join();
  return x;
  }
 
  finalArray = strings.map(reverseStr());
   
  return finalArray;
};

const onlyEven = numbers => {
  let evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers);
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  let removedItem = array.splice(index, 1);
  return array; 
};

const elementsStartingWithAVowel = strings => {
  let arr = [];

  for (i = 0; i <= strings.length; i++) {
    if (strings[i].charAt(0) === "A" || strings[i].charAt(0) === "E" || strings[i].charAt(0) === "I" || strings[i].charAt(0)  === "O" || strings[i].charAt(0) === "U" || strings[i].charAt(0) === "a" || strings[i].charAt(0) === "e" || strings[i].charAt(0) === "i" || strings[i].charAt(0)  === "o" || strings[i].charAt(0) === "u") {
      arr.push(strings[i])
    } else {
      console.log(strings[i]);
    };

  return arr;

  } 
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  let sum = numbers.reduce(function(a, b){
  return a + b;
}, 0);
  
return sum;
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
