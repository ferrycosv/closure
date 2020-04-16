// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result


const concatPigs = (str) => {
  return str + " pigs";
}
const concatParam = (str, param) => {
  return str + param;
}

const str1 = '-';

console.assert(concatPigs(str1) === _, 'assert 1');
console.assert(concatPigs(str1) === _, 'assert 2');
console.assert(concatParam(str1, " rock!") === _, 'assert 3');
console.assert(concatParam(str1, " rock!") === _, 'assert 4');


const str2 = "hoy";

console.assert(concatPigs(str2) === _, 'assert 5');
console.assert(concatPigs(str2) === _, 'assert 6');
console.assert(concatParam(str2, " cheese!") === _, 'assert 7');
console.assert(concatParam(str2, " cheese!") === _, 'assert 8');


