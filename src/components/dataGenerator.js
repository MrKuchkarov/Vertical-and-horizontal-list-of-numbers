// dataGenerator.js

// Генерация случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Генерация уникального идентификатора
export function uniqueIdGenerator() {
    return Math.random().toString(36).substr(2, 9);
}
// Генерация горизонтального списка с рандомным количеством элементов (больше 10)
function generateHorizontalList() {
    const count = getRandomInt(11, 20);
    const list = [];
    for (let i = 0; i < count; i++) {
        list.push({
            id: uniqueIdGenerator(), // Генерация уникального ключа id для каждого элемента
            value: getRandomInt(1, 100) // Пример значения
        });
    }
    return list;
}

let cachedVerticalData = null;

// Генерация вертикального списка с рандомным количеством элементов (больше 100)
export function generateVerticalData() {
    if (cachedVerticalData) {
        return cachedVerticalData;
    }

    const verticalData = [];
    const verticalItemCount = getRandomInt(101, 150);
    for (let i = 0; i < verticalItemCount; i++) {
        verticalData.push(generateHorizontalList());
    }

    cachedVerticalData = verticalData;
    return verticalData;
}
