const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let temp = new Node(data, priority);
		this.insertNode(temp);
		this.shiftNodeUp(temp);
	}

	pop() {
		if(this.root !== null){

		}
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		
	}

	insertNode(node) {
   		if (this.isEmpty())
			this.root = node;
		else {
			if (this.parentNodes[0].left === null) {
                this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];
			}
			else {
                this.parentNodes[0].right = node;
                node.parent = this.parentNodes[0];
                this.parentNodes.shift();
			}
		}
		this.parentNodes.push(node);
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
