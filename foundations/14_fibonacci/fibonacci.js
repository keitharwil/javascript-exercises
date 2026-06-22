const fibonacci = function(n) {
    let previous = 0;
    let current = 1;
    let fMember = n
    let next;

    if (typeof n !== "number") fMember = parseInt(fMember);
    if (fMember > 0){
        for (let i = 1; i < fMember; i++){
            next = previous + current;
            previous = current;
            current = next;
            next = 0;
        };
        return current;
    } else if (fMember < 0){
        return "OOPS";
    } else {
        return 0;
    }; 
};

// Do not edit below this line
module.exports = fibonacci;
