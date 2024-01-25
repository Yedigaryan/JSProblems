
const countBits = (n) => {
    return Array.from(n.toString(2)).reduce((acc, bit) => acc + (bit === '1' ? 1 : 0), 0);
}

console.log(countBits(0), '0');
console.log(countBits(4), '1');
console.log(countBits(7), '3');
console.log(countBits(9), '2');
console.log(countBits(10), '2');