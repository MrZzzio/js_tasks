function calculation(string){
  var regexp = /[^\d\+\*\.\/\-]/ig;
  var cleanString = string.replace(regexp, '');
  var digits = cleanString.split(/[\+\-\*\/]/ig);
  var operators = cleanString.replace(/[\d\.]/ig, '').split('');
  var total = parseFloat(digits[0]);

  for (var i = 0; i <= digits.length; i++) {
    switch (operators[i]) {
      case '+':
        total += parseFloat(digits[i + 1]);
        break;
      case '-':
        total -= digits[i + 1];
        break;
      case '*':
        total *= digits[i + 1];
        break;
      case '/':
        total /= digits[i + 1];
        break;
    }
  }
  return total;
};

console.log(calculation("3.5 землекопа +4 поросенка *   10 рублей - 5.5 $ /5 человек="));
