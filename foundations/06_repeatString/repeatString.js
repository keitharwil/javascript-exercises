const repeatString = function(string, num) {
    let message = '';
    let loops = num
    if (loops < 0){
        return "ERROR";
        
    } else {
        for(; loops > 0; loops--){
            message += string;
        };
        return message;
    };
};

// Do not edit below this line
module.exports = repeatString;
