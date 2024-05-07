function sumOfLastFivePositiveElements(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    
    if (positiveNumbers.length < 5) {
        return "Не хватає додатніх елементів";
    }
    let sum = 0;
    
    if (positiveNumbers.length >= 5) {
        for (let i = positiveNumbers.length - 1; i >= positiveNumbers.length - 5; i--) {
            sum += positiveNumbers[i];
        }
    } else {
        sum = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
    }
    
    return sum;
}

function getInputArray() {
    const input = prompt("Введіть елементи масиву, розділені комою:");
    const arr = input.split(",").map(item => parseInt(item.trim()));
    return arr;
}

const arr = getInputArray();

const result = sumOfLastFivePositiveElements(arr);
console.log("Сума останніх 5 дод. елементів:", result);
