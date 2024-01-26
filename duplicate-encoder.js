/**
 * The goal of this exercise is to convert a string to a new string
 * where each character in the new string is "(" if that character appears only once in the original string, or ")"
 * if that character appears more than once in the original string.
 * Ignore capitalization when determining if a character is a duplicate.
 *
 * Examples
 * "din"      =>  "((("
 * "recede"   =>  "()()()"
 * "Success"  =>  ")())())"
 * "(( @"     =>  "))(("
 * Notes
 * Assertion messages may be unclear about what they display in some languages.
 * If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 * @param word
 * @returns {string}
 */

function duplicateEncode(word) {
    const charCount = new Map();

    // Count the frequency of each character
    for (let char of word.toLowerCase()) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Create the result string based on character frequency
    return word.toLowerCase().split('').map(char => (charCount.get(char) === 1 ? '(' : ')')).join('');
}

const duplicateEncodeOneLine = word => [...word.toLowerCase()].map(char => (word.toLowerCase().split(char).length - 1 === 1 ? '(' : ')')).join('');
