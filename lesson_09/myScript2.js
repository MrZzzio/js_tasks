function remove(string){
  var regexp = /[\s\.\?\,\;\:\!]/g;
  var loweString = string.toLowerCase();
  var words = loweString.split(regexp);
  var b;
  var equals = [];
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
  var rgsp = "[" + equals + "]";
  var result = string.replace(new RegExp(rgsp, "ig"), "");
  return result;
  };
  console.log(remove("Чего-с изволите-с?Барин-с!"));
