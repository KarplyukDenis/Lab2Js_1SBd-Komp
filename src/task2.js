function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const num = parseInt(prompt("Введіть число для обчислення факторіалу:"));

const result = factorial(num);
console.log(`Факторіал числа ${num} дорівнює:`, result);
