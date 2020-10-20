module.exports = function reverse (n) {
  let number = n;
  if(number < 0){
    number = number * (-1);
  }
  let result = number.toString().split('').reverse().join('');
  return +result
}
