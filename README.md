# stack
A stack is an ordered collection of items that follows the LIFO (short for Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top and the opposite is known as the base. The newest elements are near the top, and the oldest elements are near the base

####### How To use #############

const Stack = require('stack');


Problem1: Decimal to binary

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

Problem 2: Whether paranthenses are balanced or not. 
Solution:
function areBalancedParentheses(str){
	let stackObj = new Stack();
	let dict = {
					"]" : "[",
					"}" : "{",
					")" :"("
				}
	for(let i=0; i<str.length; i++){
			if(str[i]=='[' || str[i]=='{' || str[i]=='('){
					stackObj.push(str[i]);	
			}if(str[i]==']' || str[i]=='}' || str[i]==')'){
				if(stackObj._storage[stackObj._size-1] == dict[str[i]]){
					stackObj.pop();	
				}
			}
			
	}

	
	if(stackObj._size > 0){
		return false;
	}
	return true;
}

console.log(isBalancedParentheses("[test(here(){this[this][hi{ert(ertryt)}]})dsdsds]"))
