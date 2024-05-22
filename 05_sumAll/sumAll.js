const sumAll = function(num1, num2) {
    //const larger = num2 > num1 ? 1 : 2
    if (!Number.isInteger(num1) || num1 < 0 || num2 < 0 || !Number.isInteger(num2)){
        return "ERROR"
    }
    const larger = num2 > num1 ? num2 : num1
    let smaller = num2 > num1 ? num1 : num2
    let sum = 0
    while (smaller <= larger){
        sum += smaller
        smaller++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
