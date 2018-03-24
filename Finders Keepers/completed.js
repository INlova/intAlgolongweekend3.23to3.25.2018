function findElement(arr, func)
/*global filterArr*/ //for c9
{
	// filter array with the function provided - read only triggered on global declaration
	filterArr = arr.filter(func);
	//return first true element, or undefined otherwise
	return filterArr[0];
}
// works!!
findElement([1, 2, 3, 4], function(num) {
	return num % 2 === 0;
});