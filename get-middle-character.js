/**
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
 *
 * #Examples:
 *
 * getMiddle("test") should return "es"
 *
 * getMiddle("testing") should return "t"
 *
 * getMiddle("middle") should return "dd"
 *
 * getMiddle("A") should return "A"
 * #Input
 *
 * A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
 *
 * #Output
 *
 * The middle character(s) of the word represented as a string.
 * @param str
 * @returns {*|string}
 */
const getMiddle = str => str.length % 2 === 0 ? str.slice(str.length / 2 - 1, str.length / 2 + 1) : str.charAt(Math.floor(str.length / 2));

