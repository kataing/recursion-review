// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   console.log(document.getElementsByClassName(className));
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var resultsArray = [];

  var addElements = function(element) {
    if (element.classList && element.classList.contains(className)) {
      resultsArray.push(element);
    }
    if(element.childNodes) {
      for(var i = 0; i < element.childNodes.length; i++) {
        addElements(element.childNodes[i]);
      }
    }
  };



  
  
  
  addElements(document.body);

  return resultsArray;
};
