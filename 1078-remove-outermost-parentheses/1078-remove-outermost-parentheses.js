/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = '';
    let balance = 0;
    
    for (let char of s) {
        if (char === '(') {
            if (balance++) result += char;
        } else {
            if (--balance) result += char;
        }
    }
    
    return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))")); 
console.log(removeOuterParentheses("()()")); 
