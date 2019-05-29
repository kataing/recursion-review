// If life was easy, we could just do things the easy way:
var getElementsByClassName = function (className) {
  console.log(document.getElementsByClassName(className));
  return document.getElementsByClassName(className);
};

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className) {
//   // your code here
//   var resultsArray = [];
//   var nodes;

//   // var addElements = function(element) {
//   //   if (element.classList && element.classList.contains(className)) {
//   //     resultsArray.push(element);
//   //   }
//   //   return resultsArray;
//   // }

//   // var searchChildNodes = function(parentNode) {
//   //   for(var i = 0; i < nodes.length, i++) {
//   //     if(!nodes.childNodes) {
//   //       addElements(nodes[i]);
//   //     } else {
//   //       searchChildNodes(nodes[i]);
//   //     }
//   // }

//   // return searchChildNodes(nodes);

//   // var searchChildNodes = function(parentNode) {
//   //   var childNodes = parentNode.childNodes;

//   //   for(var i = 0; i < childNodes.length; i++) {
//   //     addElements(childNodes[i]);
//   //   }
//   // }

//   if(somecriteria) {
//     nodes = document.getElementsByTagName("*");
//   } else {
//     nodes = nodes.childNodes;
//   }

//  return getElementsByClassName(className);

// };
