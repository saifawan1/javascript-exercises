const reverseString = function(string) {
    let strArray = string.split('')
    let reversedString = ''
    for(let i = strArray.length - 1; i >= 0; i--){
        reversedString = reversedString.concat(strArray[i])
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
