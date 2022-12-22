export const countCorrectBrackets = (str: string) => {

    //! Инициализация переменных для правильных и неправильных скобок
    let correctCount = 0;
    let incorrectCount = 0;

    //! Для хранения скобок
    const stack = [];

    //! Для поиска скобок
    const brackets = str.match(/[\{\}\[\]\(\)]/g);

    if (brackets) {
        for (const bracket of brackets) {
            if (bracket === '{' || bracket === '[' || bracket === '(') {
                stack.push(bracket);
            } else {
                const top = stack[stack.length - 1];
                if (bracket === '}' && top === '{' ||
                    bracket === ']' && top === '[' ||
                    bracket === ')' && top === '(') {
                        stack.pop();
                        correctCount++;
                } else {
                    incorrectCount++;
                }
            }
            }
        }
    
    return { correctCount, incorrectCount };

}