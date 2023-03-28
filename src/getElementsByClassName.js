// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //console.log(className);
  //console.log(document.body);
  var body = document.body;
  var result = [];
  var traverse = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    //console.log(element.childNodes);
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        traverse(element.childNodes[i]);
      }
    }
  };
  traverse(body);
  return result;
};
