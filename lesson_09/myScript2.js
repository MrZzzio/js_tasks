var regexp = /[\s\.\?\,\;\:\!]/g;

function remove(string){
  loweString = string.toLowerCase();
  var words = loweString.split(regexp);
  var b;
  var equals = [];

  // for (var i = 0; i < words.length; i++) {
    var chars = words[0].split("");
    for (var j = 0; j < chars.length; j++) {
      for (var k = 0; k < words.length; k++) {
        if (words[k].length > 0) {
          if (words[k].indexOf(chars[j]) === -1) {
            b = false;
            break;
          } else {
            b = true;
          }
        }
      }
      if (b) {
        equals.push(chars[j]);
      }
    }

  // }
  for (var i = 0; i < equals.length; i++) {
    string.replace(new RegExp(equals[i], 'g'), '');
  }
  console.log(string);
};

remove("Чего-с изволите-с?Барин-с!");
