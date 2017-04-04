# stack
A stack is an ordered collection of items that follows the LIFO (short for Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top and the opposite is known as the base. The newest elements are near the top, and the oldest elements are near the base

####### How To use #############

const Stack = require('stack');


Problem: Decimal to binary

Solution:

function DectoBinary(decNum){
	let stackObj = new Stack();
	let binaryString='',reminder ;
	while(decNum>0){
			reminder = Math.floor(decNum % 2)
			console.log(reminder);
			stackObj.push(reminder);
			decNum = Math.floor(decNum/2);

			
	}
	while(!stackObj.isEmpty()){
		//console.log(stackObj.pop());
		binaryString +=	stackObj.pop().toString();
	}
	return binaryString;

}

