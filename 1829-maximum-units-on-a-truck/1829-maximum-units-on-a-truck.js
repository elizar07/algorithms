/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
       boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;
    
    for (let i = 0; i < boxTypes.length; i++) {
        let numberOfBoxes = boxTypes[i][0];
        let unitsPerBox = boxTypes[i][1];
        let boxesToTake = Math.min(truckSize, numberOfBoxes);
        totalUnits += boxesToTake * unitsPerBox;
        truckSize -= boxesToTake;
        if (truckSize === 0) {
            break;
        }
    }
    
    return totalUnits;
};