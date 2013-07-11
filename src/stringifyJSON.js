// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var text = "";
	if (typeof obj === 'number' || typeof obj === 'boolean') {
		text += obj;
	} else if (typeof obj === 'string') {
		text += '"';
		text += obj;
		text += '"';
	} else if (obj == null){
		text = "null";
	}

	if (obj instanceof Array) {
		var length = obj.length;
		text += "[";
		for (var i = 0; i < length; i++) {
			text += stringifyJSON(obj[i]);
			if(i < length - 1) {
				text += ","
			}
		}
		text += "]";
	} else if (obj instanceof Object) {
		text += "{";
		for (var prop in obj){
			text += '"';
			text += prop;
			text += '":';
			text += stringifyJSON(obj[prop]);
			notFirst++;
		}
		text += "}";
	}

	return text;
};