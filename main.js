// Linear search
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// Binary search
function binarySearch(array, value, start, end) {
  let start = start === undefined ? 0 : start;
  let end = end === undefined ? 0 : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log("Start ->", start, "End ->", end);

  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// Searching and Traversal in a tree

// Setup a binary search tree for searching trees
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // Depth-first search
  dfs(values = []) {
    if (this.left) {
      values = this.left.dfs(values);
    }

    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }

    return values;
  }

  //Breadth-first search
  bfs(tree, values = []) {
    const queue = new Queue(); // There is no Queue class in this file, it would need to be implemented first

    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); // Remove node from queue
      values.push(node.value); // Store the node values in the values array

      if (node.left) {
        queue.enqueue(node.left); // Add the left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // Add the right child to the queue
      }
    }

    return values;
  }
}
