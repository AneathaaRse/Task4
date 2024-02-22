
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function to print odd numbers
var printOddNumbers = numbers => {
    numbers.forEach(number => {
        if (number % 2 !== 0) {
            console.log(number);
        }
    });
};


var strings = ["hello guvi", "task", "completed"];

// Arrow function to convert strings to title case
var titleCaseStrings = strings.map(string => {
    return string.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log(titleCaseStrings);




var numbers = [1, 2, 3, 4, 5];

// Arrow function to calculate sum of numbers
var sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function to check if a number is prime
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = numbers.filter(number => isPrime(number));

console.log(primeNumbers);


var words = ["level", "hello", "racecar", "madam"];

// Arrow function to check if a word is palindrome
const isPalindrome = word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};


const palindromeWords = words.filter(word => isPalindrome(word));

console.log(palindromeWords);


