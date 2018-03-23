function fearNotLetter(str) {
	//console.log(firstChar.charCodeAt(0));
	//console.log("char code of a:", "a".charCodeAt(0));
	for (var i = 0; i < str.length - 1; i++) {
		if (str.charCodeAt(i + 1) == str.charCodeAt(i) + 1) {
			console.log("next char is next in alphabet");
			console.log("next char is next in alphabet");
		} else {
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}
	}
}
fearNotLetter("abcdefghjklmno");
// input - string of characters "a-z" no special characters, no wrap around "z to a".  In this situation, case is not important
//output - 'undefined' if no character is missing, or the missing character will be returned.  also, same items as above  
// example: input "abce" Output: 'd'
//1 first character = 'a'
// 2 check if next letter is in alphabet
//      3check if another letter available
//          4Go to the next letter and repeat step 2.
//5 (else)
//      6 return undefined 
//7 else
//  8 return expected character