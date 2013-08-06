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
		var notFirst = 0;
		for (var prop in obj){
			if (prop == 'undefined') {return "{}";}	//this can't be right
			if(notFirst) {
				text += ",";
			}
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