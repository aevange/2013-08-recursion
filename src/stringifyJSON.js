// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var type = typeof obj;
	if (type === 'object') {
		if(_.isArray(obj)) {
			type = 'array';
		} else if (obj === null) {
			type = 'null';
		}
	}

	switch(type) {
		case 'string':
		  return '"' + obj + '"';
		case 'number':
		  return obj + '';
		case 'boolean':
		  return obj + '';
		case 'undefined':
		  return '';
		case 'array':
		  return "[" + _.map(obj, stringifyJSON).join(",") + "]";
		case 'object':
		  var resultArray = [];
		  _.each(obj, function(val, key) {
		  	var valString = stringifyJSON(val);
		  	if(valString != '') {
		  		resultArray.push(stringifyJSON(key) + ':' + valString);
		  	}
		  });
		  return "{" + resultArray.join(",") + "}";
		case 'null':
		  return 'null';
		case 'function':
		  return '';
    }
};