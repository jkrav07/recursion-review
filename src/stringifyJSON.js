// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input  object
  // output  string


  //if input  is string
  // if input is a number or boolean
  // if input is a function or undefined or null or NAN
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'function' ||
    obj === undefined ||
    obj === NaN) {
    return undefined;
  }

  //if input is an arr
  //if input is an obj
  //declare empty array
  //iterate through an object
  //each key-vaule which will be written down as string, will be pushed into an array
  //key value will be the recursive call of our function
  if (Array.isArray(obj)) {
    var output = [];

    obj.forEach(function(ele) {
      output.push(stringifyJSON(ele));
    });
    return '[' + output.join(',') + ']';

  } else if (typeof obj === 'object') {
    var output = [];

    for (var key in obj) {
      var value = stringifyJSON(obj[key]);

      if (value !== undefined && key !== undefined) {
        output.push('"' + key + '":' + value );
      }

    }
    return '{' + output.join(',') + '}';
  }

};
