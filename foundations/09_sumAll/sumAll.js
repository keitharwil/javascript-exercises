const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum)||!Number.isInteger(secondNum)|| firstNum < 0 || secondNum < 0){
        return "ERROR"
    };
    const calculate = (lowerNum, biggerNum) => {
        let sum = 0;
        let adding = lowerNum;
        for(let i = lowerNum; i <= biggerNum; i++){sum += adding++;};
        return sum;
    };
    switch (true){
        case firstNum < secondNum:
            return calculate(firstNum, secondNum);
        case secondNum < firstNum:
            return calculate(secondNum, firstNum);
        case firstNum == secondNum:
            return firstNum;
        default:
            return "ERROR";
    };
    
};

// Do not edit below this line
module.exports = sumAll;
