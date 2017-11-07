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
			for (let i  = 0; i < this.parentNodes.length; i++) {
				if (this.parentNodes[i].left === null) {
                    this.parentNodes[i].left = node;
                    node.parent = this.parentNodes[i];
                    break;
				}
			}
            for (let i = 0; i < this.parentNodes.length; i++) {
                if (this.parentNodes[i].right === null) {
                    this.parentNodes[i].right = node;
                    node.parent = this.parentNodes[i];
                    break;
                }
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
