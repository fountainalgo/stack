
'use strict'
/**
 *
 * @namespace Stack
 */
class Stack {	
	/**
   * @method constructor
   */
	constructor(){
			this._storage = [];
			this._size=0;
	}
	/**
   		* @method isEmpty
   		* To check whether stack is empty or not.
   */
	isEmpty(){
		return this._size===0;
	}
	/**
   		* @method Push
   		* To add an item in existing Stack.
   		* @param {String} format
   */
	push(elem){
		this._storage[this._size++] = elem;
	}
	/**
   		* @method pop
   		* To POP an item from Stack.
   */
	pop(){
		let size = this._size;
		let deletedData;
		if(!this.isEmpty()){
			deletedData = this._storage[size-1];
			this._storage.splice(size-1,1);
			this._size--;
			return deletedData;	
		}else{
			throw "Stack is empty."
		}
		
	}
	/**
   		* @method get
   		* get your stack.
   */
	get(){
		return this._storage;
	}
	/**
   		* @method get
   		* clean your stack.
   */
	clean(){
		this._storage = [];
	}
	peek(){
		return this._storage[this._size-1];
	}
}

module.exports = Stack


