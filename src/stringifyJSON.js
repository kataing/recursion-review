// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultsArray = [];
  var resultsString = '';

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number') {
    return "" + obj ;
  }
  if (typeof obj === 'boolean') {
    return "" + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return 'null';
  }
  // if (typeof(obj) === 'function') {
  //   continue;
  // }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        resultsArray.push(stringifyJSON(obj[i]));
      }
      return '['+ resultsArray + ']' ;
    }
  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        if(typeof(obj[key]) === 'function' || obj[key] === undefined) {
          continue;
        }
        resultsString = stringifyJSON(key) + ":" + stringifyJSON(obj[key]); 
        resultsArray.push(resultsString);
      }
      return "{" + resultsArray  + "}";
    }
  }
  
};
