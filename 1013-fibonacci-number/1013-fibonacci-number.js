/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1;
    let temp;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
};

console.log(fib(2)); 
console.log(fib(3)); 
console.log(fib(4)); 
