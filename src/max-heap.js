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
			let temp = this.root;
			let detach = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detach);
			//this.shiftNodeDown(this.root);
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
		if ((detached.left !== null ||  detached.right !== null) && this.parentNodes.length > 0)   {
            let temp = this.parentNodes.pop();
            temp.left = detached.left;
            temp.right = detached.right;
            if(temp.left !== null)
            	temp.left.parent = temp;
            if(temp.right !== null)
            	temp.right.parent = temp;
            this.root = temp;
            this.parentNodes.unshift(temp);
		}

	}

	size() {
        let count = 0;
        let index = 1;
        if (this.root !== null) {
        	count += index;
            while (this.root.right !== null) {
            	index *= 2;
                count += index;
                this.root = this.root.right;
            }
		}
		if (this.parentNodes.length < index) {
            for (let i = 0; i < this.parentNodes.length; i++) {
                if (this.parentNodes[i].left === null && this.parentNodes[i].right === null)
                    count++;
            }
		}

        return count;
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
        if (node.left !== null){
            let temp1 = this.parentNodes.indexOf(node);
            let temp2 = this.parentNodes.indexOf(node.left);
            this.parentNodes[temp1] = node.left;
            this.parentNodes[temp2] = node;
            if (this.root === node)
            	this.root = node.left;
			node.left.swapWithParent();
            this.shiftNodeDown(node);
        }
        else if(node.right !== null){
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
