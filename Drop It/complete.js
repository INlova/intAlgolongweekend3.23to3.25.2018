function dropElements(arr, func) {
	var filteredArr = arr.slice();
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) === true) {
			break;
		} else if (func(arr[i]) === false) {
			filteredArr.shift();
		} else {
			return [];
		}
	}
	return filteredArr;
}
//test
dropElements([1, 2, 3, 4], function(n) {
	return n >= 3;
});