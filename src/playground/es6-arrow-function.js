function square(x){
	return x*x;
};
console.log (square(3));

const squareArrow = (x) => x*x;

console.log(squareArrow(9));

// Challenge - Use arrow function
// getfirstName('Mike Smith')-> "Mike"

const firstname = function(firstname){
	return firstname.split(' ')[0];
}
console.log (firstname('Mike Smith'));

const fullname = (firstname) => {
	firstname.split(' ')[0];
};
console.log(fullname('Mike Smith'));

const taksim = (firstname) => firstname.split(' ')[1];
console.log(taksim('Mark Smith'));