/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char in matchingBrackets) {
            if (stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

