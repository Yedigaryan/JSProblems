function catchSignChange(input) {
    let counter = 0;
    for (let i = 1; i < input.length; i++) {
        if ((input[i - 1] >= 0 && input[i] < 0) || (input[i - 1] < 0 && input[i] >= 0)) {
            counter++;
        }
    }
    return counter;
}

function test() {
    const tests = [
        [[], 0],
        [[1, 3, 4, 5], 0],
        [[-1, -3, -4, -5], 0],
        [[1, -3, -4, 0, 5], 2],
        [[-47, 84, -30, -11, -5, 74, 77], 3],
    ];

    for (let [input, expected] of tests) {
        console.log(catchSignChange(input), expected);
    }
}

test();