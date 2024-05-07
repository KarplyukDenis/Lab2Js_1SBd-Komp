function getArrayLength(arr) {
    if (!Array.isArray(arr)) {
        console.log("Помилка: переданий аргумент не є масивом.");
        return; 
    }
    return arr.length;
}

function getInputArray() {
    const input = prompt("Введіть елементи масиву, розділені комою:");
    const arr = input.split(",").map(item => parseInt(item.trim()));
    return arr;
}

const userArray = getInputArray();

const length = getArrayLength(userArray);
if (length !== undefined) {
    console.log("Довжина введеного масиву:", length);
}
