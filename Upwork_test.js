/**
 * // An application that will provide for a given input of file name/text:
 * // 1. Top 5 most common words (with > 3 characters)
 * // 2. Top 5 longest words
 * // 3. Top 5 least common words (with > 3 characters)
 * // 4. Total number of letters
 * // 5. Number of total special chars (. & , etc)
 */
const text = 'text text text, number,number,number,number,number, load,load,load,load,load,load,'

const readFromFile = (text) => {
    const wordsArray = text.match(/\b\w+\b/g) || [];
    const filteredWords = wordsArray.filter(word => word.length > 3);
    const wordCount = {};

    filteredWords.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1
    })

    const mostCommonWords = Object.keys(wordCount)
        .sort((a, b) => wordCount[b] - wordCount[a] || b.length - a.length)
        .slice(0, 5);

    const leastCommonWords = Object.keys(wordCount)
        .sort((a, b) => wordCount[a] - wordCount[b] || a.length - b.length)
        .slice(0, 5);

    const longestWords = filteredWords.sort((a, b) => b.length - a.length).slice(0, 5);
    const totalLetters = filteredWords.join('').length;
    const specialCharCount = text.replace(/[a-zA-Z0-9\s]/g, '').length;


    console.log('longestWords', longestWords);
    console.log('totalLetters', totalLetters);
    console.log('leastCommonWords', leastCommonWords);
    console.log('mostCommonWords', mostCommonWords);
    console.log('specialCharCount', specialCharCount);
}

readFromFile(text)