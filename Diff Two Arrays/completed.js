function diffArray(arr1, arr2) {
	var newArr = [];
	//2x
	arr1.forEach(function(val) {
		if (arr2.indexOf(val) === -1) {
			newArr.push(val);
		}
	});
	arr2.forEach(function(val) {
		if (arr1.indexOf(val) === -1) {
			newArr.push(val);
		}
	});
	return newArr;
}
diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5]);