function getMiddle(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);

    return length % 2 === 0
        ? str.slice(middleIndex - 1, middleIndex + 1)
        : str.charAt(middleIndex);
}

// Examples
console.log(getMiddle("test"));      // Output: "es"
console.log(getMiddle("testing"));   // Output: "t"
console.log(getMiddle("middle"));    // Output: "dd"
console.log(getMiddle("A"));         // Output: "A"
