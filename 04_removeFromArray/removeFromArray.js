const removeFromArray = function(arr, ...numsToRemove) {
    let i = 0
    while (i < arr.length){
        numsToRemove.includes(arr[i]) ? arr.splice(i,1) : i++
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
