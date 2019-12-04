var nameVar = 'Siwar';
var nameVar = 'Mike';
console.log('NameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'July';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
	let petName = 'HAl';
	return petName;
}

let petname = getPetName();
console.log(petname);

//Block scoping
var fullName = 'Siwar bondka';
if(fullName){
	var firstName = fullName.split(' ')[0];
	console.log(firstName);
	var lastName = fullName.split(' ')[1];
	console.log(lastName);
}