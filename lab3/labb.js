// 1. getDecimal: возвращает дробную часть числа
function getDecimal(num) {
    return num - Math.trunc(num);
}

// 2. normalizeUrl: добавляет протокол https:// если его нет
function normalizeUrl(str) {
    if (!str.startsWith('http://') && !str.startsWith('https://')) {
        return 'https://' + str;
    }
    return str;
}

// 3. checkSpam: проверяет наличие спам-слов (xxx, viagra) без учёта регистра
function checkSpam(str) {
    const lowerStr = String(str).toLowerCase();
    return lowerStr.includes('xxx') || lowerStr.includes('viagra');
}

// 4. truncate: обрезает строку и добавляет троеточие, если она длиннее maxlength
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        // Учитываем длину многоточия (…)
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

// 5. camelize: преобразует строку из формата kebab-case/Pascal-case в camelCase
function camelize(str) {
    return str.split(/[-_]+/)
              .filter(part => part.length > 0) // Отфильтровывает пустые строки
              .map((word, index) => {
                  if (index === 0) {
                      return word; // Первое слово не меняем
                  }
                  return word[0].toUpperCase() + word.slice(1);
              })
              .join('');
}

// 6. fibs: генерирует массив из n первых чисел Фибоначчи (BigInt)
function fibs(n) {
    let result = [];
    let a = 0n, b = 1n;
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    return result;
}

// 7. arrReverseSorted: сортирует массив по убыванию
function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 8. unique: возвращает массив уникальных значений
function unique(arr) {
    return [...new Set(arr)];
}

export { getDecimal, normalizeUrl, checkSpam, truncate, camelize, fibs, arrReverseSorted, unique };
