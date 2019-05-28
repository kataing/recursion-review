// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  
  // 1. Remove outer quotations
  // 2. Identify first character
  //  - {} --> obj
  //  - [] --> array
  //  - 'null' --> null
  //  - 0-9 --> loop through until end of number
  //  - 
};
