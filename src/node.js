class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left === null && this.data > node.data){
            this.left = node;
            node.parent = this;
		}
		else if(this.right === null){
            this.right = node;
            node.parent = this;
		}
	}

	removeChild(node) {
		if (node.parent !== this) throwError(err);
		if (node.parent !== null) {
            if (node.parent.data < node.data)
                node.parent.right = null;
            else
                node.parent.left = null;
            node.parent = null;
		}
	}

	remove() {
		if (this.parent !== null)
			(this.parent).removeChild(this);
	}

	swapWithParent() {
		if (this.parent !== null) {
            var tempLeft = this.left;
            var tempRight = this.right;
            var tempParent = this.parent.parent;
            if (this.parent.data < this.data) {
                this.right = this.parent;
                this.left = this.parent.left;
			}
            else {
                this.left = this.parent;
                this.right = this.parent.right;
			}
			// if(this.parent.parent !== null){
             //    if (this.parent.parent.data < this.parent.data)
             //        this.parent.parent.right = this;
             //    else
             //        this.parent.parent.left = this;
			// }
            this.parent.parent = this;
            this.parent.left = tempLeft;
            this.parent.right = tempRight;
            // this.parent.left.parent = this.parent;
            // this.parent.right.parent = this.parent;
            this.parent = tempParent;
		}

	}
}

module.exports = Node;
