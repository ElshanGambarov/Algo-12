// Funksiya: Verilmiş ədədin vurma cədvəlini qaytarır
function generateMultiplicationTable(num) {
    // Vurma cədvəlini saxlayacaq array
    const table = [];

    // 1-dən 10-a qədər olan ədədlərlə vurma nəticələrini əlavə edir
    for (let i = 1; i <= 10; i++) {
        table.push(num * i);
    }

    // Vurma cədvəlini qaytarır
    return table;
}

// Nümunə istifadəsi
const number = 7;
const multiplicationTable = generateMultiplicationTable(number);
console.log(`Vurma cədvəli (${number} üçün):`, multiplicationTable);