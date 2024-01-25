function gcd(a, b) {
    while (b !== 0n) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b) || 0n;
}

function smallestMultiple(n) {
    let result = 1n; // Use BigInt to handle larger numbers

    for (let i = 1n; i <= n; i++) {
        result = lcm(result, i);
    }

    return Number(result % 1_000_000_007n);
}