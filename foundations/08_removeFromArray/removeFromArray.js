const removeFromArray = function(array, ...removeValues) {
    return array.filter((elements) => !removeValues.includes(elements))
};
// Do not edit below this line
module.exports = removeFromArray;
