const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		return this.heap.root === null;
	}
}

module.exports = PriorityQueue;
