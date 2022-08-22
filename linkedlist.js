const Node = (value) => {
  let next = null;

  return { value, next };
};

const LinkedList = () => {
  let head = null;
  let tail = null;

  const append = (value) => {
    let newNode = Node(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      newNode.next = null;
      tail = newNode;
    }
  };

  const prepend = (value) => {
    let newNode = Node(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
  };

  const size = () => {
    let count = 0;
    let current = head;
    while (current !== null) {
      count += 1;
      current = current.next;
    }
    return count;
  };

  const toString = () => {
    let current = head;
    let outputString = '';
    while (current !== null) {
      outputString = outputString + `(${current.value}) -> `;
      current = current.next;
    }
    if (current === null) {
      outputString = outputString + 'null';
    }
    return outputString;
  };

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const at = (index) => {
    let current = head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
      if (current === null) return 'Out of range';
    }
    return current;
  };

  const pop = () => {
    let current = head;
    console.log('Size', size());
    for (let i = 0; i < size() - 2; i += 1) {
      current = current.next;
    }
    console.log(current);
    current.next = null;
    tail = current;
  };

  const contains = (value) => {
    let current = head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  };

  const find = (value) => {
    let current = head;
    let currentIndex = 0;

    while (current !== null) {
      if (current.value === value) return currentIndex;
      current = current.next;
      currentIndex += 1;
    }
    return -1;
  };

  const insertAt = (value, index) => {
    let newNode = Node(value);

    let current = head;
    for (let i = 0; i < index - 1; i += 1) {
      current = current.next;
      if (current === null) return 'Out of range';
    }
    newNode.next = current.next;
    current.next = newNode;
  };

  const removeAt = (index) => {
    if (index === 0) {
      let temp = head.next;
      head = temp.next;
    }

    let current = head;
    for (let i = 0; i < index - 1; i += 1) {
      current = current.next;
      if (current === null) return 'Out of range';
    }
    let temp = current.next;
    current.next = temp.next;
  };

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
};

let list = LinkedList();
