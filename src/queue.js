const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.maxSize <= this.heap.size())
			throw Error;
		this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty())
			throw Error;
		let temp = this.heap.pop();
		return temp;
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
