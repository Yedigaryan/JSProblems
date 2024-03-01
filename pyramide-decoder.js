const fs = require("fs");

function decode(message_file) {
    let content = fs.readFileSync(message_file, "utf8");
    let lines = content.trim().split("\n");

    const decodedMessage = [];
    let currentNumber = 1;
    let currentLineIndex = 0;
    numRows = lines.length;
    let pyramid = new Map();

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split(" ")
        pyramid.set(Number(line[0]), line[1].replace("\r", ""))
    }

    while (currentNumber <= numRows) {
        decodedMessage.push(pyramid.get(currentNumber));
        currentLineIndex++;
        currentNumber = ++currentNumber + currentLineIndex;
    }

    return decodedMessage.join(" ").trim();
}

// console.log(decode("default.txt")); // Output: I love computers
console.log(decode("coding_qual_input.txt")); // Output: I love computers
