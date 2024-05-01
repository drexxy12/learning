// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // Output: "olleh"

// Count Characters:
function countCharacters(str) {
    return str.length;
}

// Example
console.log(countCharacters("hello")); // Output: 5

// Count Characters:
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Find Maximum and Minimum:
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Example
console.log(findMaximum([1, 3, 5, 2, 4])); // Output: 5
console.log(findMinimum([1, 3, 5, 2, 4])); // Output: 1

// Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example: Filter out even numbers
console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Output: [2, 4]

// Factorial:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example
console.log(factorial(5)); // Output: 120

// Prime Number Check:
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

// Example
console.log(isPrime(17)); // Output: true

// Fibonacci Sequence:
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example
console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]






