/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    }
    else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = this.get(this.length - 2);
    }
    this.length--;
    return node.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    this.length--;
    return node.val;
  }


  get(idx) {
    if (idx > this.length) {
      throw new Error("Index access error");
    }
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }


  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let node = new Node(val);
    if (this.length === 0 || idx === this.length) {
      this.push(val);
      this.length--;
    }
    else if (this.length === 1) {
      this.head = node;
      node.next = this.tail;
    }
    else {
      let old_node = this.get(idx - 1);
      node.next = old_node.next;
      old_node.next = node;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let node;
    if (this.length === 1) {
      node = this.head;
      this.pop();
      this.length++;
    }
    else {
      let prev_node = this.get(idx - 1);
      node = prev_node.next;
      prev_node.next = node.next;
    }
    this.length--;
    return node.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let node = this.head;
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += node.val;
      node = node.next;
    }
    return total / this.length;
  }
}
