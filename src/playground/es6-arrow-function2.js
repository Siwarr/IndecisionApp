//argumetns object - no longer bound with aarow functions

const add = (a,b)=>{
	//console.log(arguments);
	return a+b;
};
console.log(add(55,1));

//this keyword - no longer bound
//map like foreach but work differently - foreach makes u do smthg with the item ( affiche on screen expl) / map gets u to transform item  getting new array back
const user={
	name: 'Siwar',
	cities: ['Tunis', 'mourouj' ,'marsa'],
	printPlacesLived(){
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	numbers: [1,2,3],
	multiplyBy: 2,
	multiply(){
		return this.numbers.map((num) => this.multiplyBy * num);
	}
//numbers - array of numbers
//multiplyBy - single number
//multiply - return new array where the numbers have been multiplied 
};

console.log(multiplier.multiply());
1 , 2 , 3
2
2, 4 , 6

