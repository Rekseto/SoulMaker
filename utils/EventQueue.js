class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class EventQueue {
  enqueue (data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue () {
    let newNode;
    if (this.head !== null) {
      newNode = this.head.data;
      this.head = this.head.next;
    }
    return newNode;
  }

  getQueue () {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data)
      current = current.next;
    }

    return result;
  }
}

export default EventQueue;
