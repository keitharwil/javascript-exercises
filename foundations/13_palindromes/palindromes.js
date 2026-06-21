const palindromes = function (input) {
    const punctuations = [
        '.', ',', ';', ':', '!', '?', '"', "'", '`', '-', 
        '–', '—', '(', ')', '[', ']', '{', '}', '⟨', '⟩', 
        '…', '/', '\\', '|', '@', '&', '*', '_', '§', '¶', 
        '†', '‡', '•', '°', '¡', '¿', '«', '»', '‹', '›'
    ];
    const isPalindrome = input
                            .toLowerCase()
                            .replaceAll(" ", "")
                            .split("")
                            .toReversed()
                            .filter((value) => !punctuations.includes(value))
                            .join("");

   return isPalindrome === isPalindrome.split("").toReversed().join("") ? true : false
};

// Do not edit below this line
module.exports = palindromes;
