function truthCheck(collection, pre) {
	var trueCount = 0;
	var filtered = collection.filter(function(obj) {
		// +1 to trueCount if object has pred
		if (obj[pre] && Boolean(obj[pre])) {
			console.log(obj[pre]); //added scolon
			trueCount++;
		}
	});
	if (trueCount !== collection.length) {
		return false;
	}
	return true;
}