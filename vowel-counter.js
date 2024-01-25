
const getCount = str => str.split('').filter(char => 'aeiou'.includes(char)).length;



console.log(getCount("abracadabra"), 5)