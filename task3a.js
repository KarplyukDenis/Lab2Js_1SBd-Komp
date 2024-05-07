let arr;
do {
    let input = prompt("Введіть елементи масиву через кому:");
    if (input === null || input.trim() === "") {
        console.log("Помилка: не введено жодних даних!");
    } else {
        arr = input.split(',').map(Number);
    }
} while (!arr);
let n = 0;
while (true) {
    if (arr[n] === undefined) {
        break;
    } else {
        n++;
    }
}
console.log("Довжина масиву: " + n);