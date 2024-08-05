/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const frequencyMap = new Map();
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    const sortedChars = Array.from(frequencyMap.entries())
        .sort((a, b) => b[1] - a[1]) 
        .map(([char, freq]) => char.repeat(freq));
    return sortedChars.join('');
};