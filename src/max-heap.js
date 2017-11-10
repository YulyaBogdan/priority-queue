const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
	}

	push(data, priority) {
		let temp = new Node(data, priority);
		this.insertNode(temp);
		this.shiftNodeUp(temp);
		this.sizeOfHeap++;
	}

	pop() {
		if(this.root !== null){
			this.sizeOfHeap--;
			let temp = this.root;
			let detach = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detach);
			if (this.root instanceof Node)
                this.shiftNodeDown(this.root);
			return temp.data;
		}
		
	}

	detachRoot() {
        if(this.parentNodes.indexOf(this.root) !== -1)
            this.parentNodes.shift();
		let temp = this.root;
		this.root = null;
		return temp;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (this.parentNodes.length !== 0 && detached instanceof Node)   {
            let temp = this.parentNodes.pop();
            if (this.parentNodes.indexOf(temp.parent) !== -1)
                temp.parent.left = null;
            else
                temp.parent.right = null;
            temp.left = detached.left;
            temp.right = detached.right;
            if(temp.left !== null)
            	temp.left.parent = temp;
            if(temp.right !== null)
            	temp.right.parent = temp;
            temp.parent = null;
            this.root = temp;
            if(temp.right === null)
                this.parentNodes.unshift(temp);
		}
		else {
			this.root = detached;
            this.parentNodes.unshift(detached);
		}

	}

	size() {
        let count = 0;
        let index = 1;
        if (this.root !== null) {
        	count += index;
            while (this.root.left !== null) {
            	index *= 2;
                count += index;
                this.root = this.root.left;
            }

            count -= index;
		}
		for (let i = 0; i < this.parentNodes.length; i++) {
			if (this.parentNodes[i].left === null)
				count++;
		}
        return this.sizeOfHeap;
	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
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
		if (node.parent !== null && node.priority > node.parent.priority){
            let temp1 = this.parentNodes.indexOf(node);
            let temp2 = this.parentNodes.indexOf(node.parent);
            this.parentNodes[temp1] = node.parent;
            this.parentNodes[temp2] = node;
            if (this.root === node.parent)
            	this.root = node;
            node.swapWithParent();
            this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
        if (node.left !== null && node.priority < node.left.priority){
            let temp1 = this.parentNodes.indexOf(node);
            let temp2 = this.parentNodes.indexOf(node.left);
            this.parentNodes[temp1] = node.left;
            this.parentNodes[temp2] = node;
            if (this.root === node)
            	this.root = node.left;
			node.left.swapWithParent();
            this.shiftNodeDown(node);
        }
        else if(node.right !== null && node.priority < node.right.priority){
            let temp1 = this.parentNodes.indexOf(node);
            let temp2 = this.parentNodes.indexOf(node.right);
            this.parentNodes[temp1] = node.right;
            this.parentNodes[temp2] = node;
            if (this.root === node)
                this.root = node.right;
            node.right.swapWithParent();
            this.shiftNodeDown(node);
        }
	}
}

module.exports = MaxHeap;
