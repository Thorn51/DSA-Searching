# Thinkful - Data Structures & Algorithms

Introduction module on data structures and algorithms including:

- Recursive Algorithms
- Big O Notation
- Working with Arrays
- Working with Linked Lists
- Working with Stacks and Queues
- Working with Hash maps
- Working with Binary Search Trees
- **Search Algorithms** (current)
- Sorting Algorithms

## Search Algorithms

### Linear Search

```
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
```

### Binary Search

```
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
```

### Searching and Traversal in a tree - DFS & BFS

```
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
```

### Exercises

#### How many searches?

- Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
- Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

#### Adding a React UI

For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

**Linear search:**
Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

`89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`

**Binary search:**
Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

#### Find a book

Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

#### Searching in a BST

No coding is needed for these drills. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

- Given a binary search tree whose in-order and pre-order traversals are respectively `14 15 19 25 27 35 79 89 90 91` and `35 25 15 14 19 27 89 79 91 90`. What would be its postorder traversal?

- The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

#### Implement different tree traversals

Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: `25 15 50 10 24 35 70 4 12 18 31 44 66 90 22`. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

- A pre-order traversal should give you the following order: `25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90`
- In-order: `4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90`
- Post-order: `4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25`

#### Find the next commanding officer

Suppose you have a tree representing a command structure of the Starship USS Enterprise.

```
                                Captain Picard
                            /                   \
                Commander Riker             Commander Data
                /           \                         \
        Lt. Cmdr. Worf      Lt. Cmdr. LaForge       Lt. Cmdr. Crusher
                \                                          \
Lieutenant security-officer                             Lieutenant Selar
```

This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

#### Max profit

The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

#### Egg drop (optional)

This is a fun exercise to do - consider this optional after you are done with all the exercises above. Imagine that you wanted to find the highest floor of a 100 story building that you could drop an egg from without the egg breaking. But you only have 2 eggs. Write an algorithm to find out in the most efficient way which floors you should drop the eggs from. After you have understood the question and made some attempts to solve the problem, go through this reading before you start coding: http://datagenetics.com/blog/july22012/index.html.
