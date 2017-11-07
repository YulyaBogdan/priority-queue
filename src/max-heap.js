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
        var count = 0;
        if (this.root !== null) {
        	count = 1;
            while (this.root.right !== null) {
                this.root = this.root.right;
                count += count*2;
            }

		}
		return count + this.parentNodes.length;
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
		if (node.parent !== null){
            let temp1 = this.parentNodes.indexOf(node);
            let temp2 = this.parentNodes.indexOf(node.parent);
            this.parentNodes[temp1] = node.parent;
            this.parentNodes[temp2] = node;
            node.swapWithParent();
            this.shiftNodeUp(node);
		}
		this.root = node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
