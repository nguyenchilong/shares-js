
// interviewer: what will the following code output ?
const array = [10, 12, 15, 21];
for (let i = 0; i < array.length; i++) {
	setTimeout(function() {
		console.log('Index: ' + i + ', element: ' + array[i]);
	}, 3000);
}
/**
Result: Index: 4, element: undefined (printed 4 times). Why ?
===========================================
*/

var createBase = function(num){
	var _n = num;
	return function(n2){
		console.log( _n + n2 );
	};
}
// Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
// ============================================


// Fixed This Problem
// 1. Solution 1:
const array2 = [10, 12, 15, 21];
for (var i = 0; i < array2.length; i++) {
	// pass in the variable i so that each function
	// has access to the correct index
	setTimeout(function(i_local) {
		return function() {
			console.log('The index of this number is: ' + i_local);
		}
	}(i), 3000);
}
// =============================================
// 2. Solution 2:
const array3 = [10, 12, 15, 21];
for (let i = 0; i < array3.length; i++) {
	// using the ES6 let syntax, it creates a new binding
	// every single time the function is called
	// read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
	setTimeout(function() {
		console.log('The index of this number is: ' + i);
	}, 3000);
}