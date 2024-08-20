# Welcome to js-collection-kit

## Overview
I built this toolkit because JavaScript doesn't include built-in advanced data structures like heaps and priority queues etc. By providing these implementations, this package is designed to save developers time, whether they're working on a project or solving data structure and algorithm problems.

## Data Structures
js-collection-kit provides following data structures:

| Data Structure          | Data Structure          |
|-------------------------|--------------------------|
| MaxHeap                 | MinHeap                  |
| Queue                   | PriorityQueue            |
| CircularQueue           | Deque                    |
| Stack                   | CircularStack            |
| PriorityStack           | LinkedList               |
| DoublyLinkedList        | CircularLinkedList       |
| BinaryTree              | BinarySearchTree         |
| AVLTree                 | Trie                     |
| AdjacencyList           | AdjacencyMatrix          |
| DirectedAdjacencyList   | DirectedAdjacencyMatrix  |
| WeightedAdjacencyList   | DisjointSet              |
| Matrix                  |                          |

here is the brief description of usage and methods which this package offers for  the mentioned data structures:

## 1. Heap
##### Features
-   **MinHeap**: A heap where the smallest element is always at the top.
-   **MaxHeap**: A heap where the largest element is always at the top.

##### Usage
#
```sh
  import { MinHeap, MaxHeap } from 'js-collections-kit';
  const minHeap = new MinHeap();
  const maxHeap = new MaxHeap();
```
##### Methods 
#
###### - Min-Heap / Max-Heap
#
| Name    | Parameters | Return                                                   |
| ------- | ---------- | -------------------------------------------------------- |
| insert  | Number     | None                                                     |
| get     | None       | `Number`(value will be removed) or `undefined`(if empty) |
| peek    | None       | `Number` or `undefined`(if empty)                        |
| size    | None       | Number                                                   |
| isEmpty | None       | Boolean                                                  |

## 2. Queue
##### Features
- **Queue:** A linear data structure that follows the FIFO (First In, First Out) principle.
- **CircularQueue:** A queue where the last position is connected back to the first position to make a circle.
- **PriorityQueue:** A queue where each element has a priority, and elements are dequeued in order of their priority.
- **Deque:** A deque (double-ended queue) allows elements to be added or removed from both ends (front and rear).

##### Usage
#
```sh
  import { Queue, CircularQueue, PriorityQueue, Deque } from 'js-collections-kit';

  const queue = new Queue();
  const circularQueue = new CircularQueue(5); // Optional: Specify max size by default its 10
  const priorityQueue = new PriorityQueue();
  const deque = new Deque();
```
##### Methods 
#
###### - Queue / CircularQueue / PriorityQueue
#
| Name    | Parameters                                                                                           | Return                                         |
| ------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| enqueue | `item` (Queue, CircularQueue) or `item, priority: Number` (PriorityQueue - by default priority is 0) | None                                           |
| dequeue | None                                                                                                 | `item` (the removed item) or `null` (if empty) |
| front   | None                                                                                                 | `item` (the front item) or `null` (if empty)   |
| rear    | None                                                                                                 | `item` (the rear item) or `null` (if empty)    |
| size    | None                                                                                                 | Number                                         |
| isEmpty | None                                                                                                 | Boolean                                        |
###### - Deque
#
| Name      | Parameters | Return                                               |
| --------- | ---------- | ---------------------------------------------------- |
| pushFront | item       | None                                                 |
| pushBack  | item       | None                                                 |
| popFront  | None       | `item` (the front item removed) or `null` (if empty) |
| popBack   | None       | `item` (the rear item removed) or `null` (if empty)  |
| peekFront | None       | `item` (the front item) or `null` (if empty)         |
| peekBack  | None       | `item` (the rear item) or `null` (if empty)          |
| size      | None       | Number                                               |
| isEmpty   | None       | Boolean                                              |

## 3. Stack
##### Features
- **Stack:** A LIFO (Last In, First Out) data structure where the last element added is the first to be removed.
- **Priority Stack:** A stack where elements are popped based on priority; highest priority is removed first.
- **Circular Stack:** A stack that uses a circular buffer for more efficient space utilization.

##### Usage
#
```sh
  import { Stack, PriorityStack, CircularStack } from 'js-collections-kit';
  
  const stack = new Stack();
  const priorityStack = new PriorityStack();
  const circularStack = new CircularStack(5);  // Optional: Specify max size by default its 10
```
##### Methods 
#
###### - Stack / Priority Stack / Circular Stack
#
| Name    | Parameters                                                                                              | Return                                            |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| push    | `item` (Stack, Circular Stack) or `item, priority: Number` (Priority Stack  - by default priority is 0) | None                                              |
| pop     | None                                                                                                    | `item`(value will be removed) or `null`(if empty) |
| peek    | None                                                                                                    | `item` or `null`(if empty)                        |
| size    | None                                                                                                    | Number                                            |
| isEmpty | None                                                                                                    | Boolean                                           |

## 4. LinkedList
##### Features
-   **SinglyLinkedList**: A basic linked list where each node points to the next node.
-   **DoublyLinkedList**: A linked list where each node points to both the next and previous nodes.
-   **CircularLinkedList**: A linked list where the last node points back to the first node, forming a circle.

##### Usage
#
```sh
  import { SinglyLinkedList, DoublyLinkedList, CircularLinkedList } from 'js-collections-kit';
  
  const singlyLinkedList = new SinglyLinkedList();
  const doublyLinkedList = new DoublyLinkedList();
  const circularLinkedList = new CircularLinkedList();  // Optional: Specify max size by default its 10
  ```
  Note: If circularLinked overflowed it will start deleting the node from tail.
 ##### Methods 
#
###### - SinglyLinkedList / DoublyLinkedList / CircularLinkedList
#
| Name          | Parameters    | Return                                                 |
| ------------- | ------------- | ------------------------------------------------------ |
| insertAtHead  | value         | None                                                   |
| insertAtTail  | value         | None                                                   |
| insertAtIndex | value, index  | None                                                   |
| deleteHead    | None          | `value` (value removed) or `null` (if empty)           |
| deleteTail    | None          | `value` (value removed) or `null` (if empty)           |
| deleteByIndex | index: Number | `value` (value removed) or `null` (if out of bounds)   |
| deleteByValue | value         | `index` (value removed) or `null` (if not found)       |
| searchByValue | value         | `index`(index of found value) or `null` (if not found) |
| searchByIndex | index: Number | `value` (value at index) or `null` (if out of bounds)  |
| size          | None          | Number                                                 |
| isEmpty       | None          | Boolean                                                |
| print         | None          | String (all elements as a space-separated string)      |
| reverse       | None          | None                                                   |

## 5. Tree
##### Features
- **BinaryTree:** A tree data structure where each node has at most two children referred to as the left child and the right child.
- **BinarySearchTree:** A binary tree which satisfies the binary search tree property: the key in each node is greater than or equal to any key stored in the left subtree and less than or equal to any key stored in the right subtree.
- **AVLTree:** A self-balancing binary search tree where the difference between the heights of left and right subtrees cannot be more than one for all nodes.
- **Trie:** A tree-like data structure that stores a dynamic set of strings, where the keys are usually strings.

##### Usage
#
```sh
  import { BinaryTree, BinarySearchTree, AVLTree, Trie } from 'js-collections-kit';
  
  const binaryTree = new BinaryTree();
  const binarySearchTree = new BinarySearchTree();
  const avlTree = new AVLTree();
  const trie = new Trie();
  ```
 
 ##### Methods 
#
###### - binaryTree / binarySearchTree / avlTree 
#
| Name       | Parameters | Return                                       |
| ---------- | ---------- | -------------------------------------------- |
| insert     | data       | None                                         |
| search     | data       | Boolean                                      |
| inOrder    | None       | Array                                        |
| preOrder   | None       | Array                                        |
| postOrder  | None       | Array                                        |
| isEmpty    | None       | Boolean                                      |
| height     | None       | Number                                       |
| depth      | data       | Number or null                               |
| levelOrder | None       | Array                                        |
| leftView   | None       | Array                                        |
| rightView  | None       | Array                                        |
| topView    | None       | Array                                        |
| flatten    | None       | TreeNode (head of the flattened linked list) |
| delete     | data       | Boolean                                      |

###### - binarySearchTree / avlTree 
#
| Name   | Parameters | Return       |
| ------ | ---------- | ------------ |
| getMin | None       | data or null |
| getMax | None       | data or null |

###### - Trie
#
| Name   | Parameters | Return  |
| ------ | ---------- | ------- |
| insert | data       | None    |
| search | data       | Boolean |
| delete | data       | Boolean |

## 6. Graph
##### Features
- **AdjacencyList:** A graph representation where each vertex stores a list of adjacent vertices. Ideal for sparse graphs.
- **AdjacencyMatrix:** A 2D matrix representation of a graph where each cell (i, j) indicates the presence or absence of an edge between vertices i and j. Useful for dense graphs.
- **DirectedAdjacencyList:** Similar to AdjacencyList, but specifically for directed graphs where edges have a direction.
- **DirectedAdjacencyMatrix:** Similar to AdjacencyMatrix, but for directed graphs where edges have a direction.
- **WeightedAdjacencyList:** An adjacency list where each edge also stores a weight, typically used for weighted graphs.

##### Usage
#
```sh
  import { AdjacencyList, AdjacencyMatrix, DirectedAdjacencyList, DirectedAdjacencyMatrix, WeightedAdjacencyList } from 'js-collections-kit';
  
  const adjacencyList = new AdjacencyList();
  const adjacencyMatrix = new AdjacencyMatrix(5);  // Number of vertices as parameter
  const directedAdjacencyList = new DirectedAdjacencyList();
  const directedAdjacencyMatrix = new DirectedAdjacencyMatrix(5);  // Number of vertices as parameter
  const weightedAdjacencyList = new WeightedAdjacencyList();
  ```
  
   ##### Methods 
###### - AdjacencyList / DirectedAdjacencyList / WeightedAdjacencyList / AdjacencyMatrix / DirectedAdjacencyMatrix
#
  | Name         | Parameters                                             | Return                                        |
  | ------------ | ------------------------------------------------------ | --------------------------------------------- |
  | addEdge      | vertex1, vertex2 (if vertex is not found, it will add) | None                                          |
  | removeEdge   | vertex1, vertex2                                       | None                                          |
  | getNeighbors | vertex                                                 | Array                                         |
  | hasVertex    | vertex                                                 | Boolean                                       |
  | hasEdge      | vertex1, vertex2                                       | Boolean                                       |
  | display      | None  (WeightedAdjacencyList excluded)                 | Space separated string (`1->2,3`  2->3 `3->`) |
  | getVertices  | None                                                   | Array                                         |
  | isEmpty      | None                                                   | Boolean                                       |
  | vertexCount  | None                                                   | Number                                        |
  | edgeCount    | None                                                   | Number                                        |

###### - AdjacencyList / DirectedAdjacencyList / WeightedAdjacencyList
#
  | Name         | Parameters | Return |
  | ------------ | ---------- | ------ |
  | addVertex    | vertex     | None   |
  | removeVertex | vertex     | None   |
  
  ## 7. 2D Array 
##### Features
- **2D Array:** A 2D array that provides a structure for storing and manipulating data in a grid-like format. It supports various operations like addition, subtraction, and multiplication of matrices.

##### Usage
#
```sh
  import { Matrix } from 'js-collections-kit';
  
  const matrix = new Matrix(3, 3, 0);  
  ```
  
     ##### Methods 
###### - 2D Array
#
  | Name        | Parameters                   | Return                               |
|---------------|------------------------------|--------------------------------------|
| constructor   | `row` (number), `col` (number), `value` (any initiale value to fill) | None                           |
| add           | `row` (number), `col` (number), `value` (any) | None                           |
| update        | `row` (number), `col` (number), `value` (it combined the value with the already present value)  | None                           |
| get           | `row` (number), `col` (number)    | Value                  |
| search        | value                   | { row: number, col: number } or null |
| searchAll     | value                   | Array<{ row: number, col: number }>  |
| replaceAll    | value1 , value2 (any)        | true                                 |
| transpose     | None                         | None                                 |
| print         | None                         | String representation of the matrix  |
| multiply      | matrixB (2D array)           | Bool                      |
| fill          | value               | None                                 |
| clear         | value (optional by default null)     | None                                 |
| getRow        | row (number)                 | Array of values in the specified row or null |
| getColumn     | col (number)                 | Array of values in the specified column or null |
| sum           | None                         | Sum of all elements                  |
| max           | None                         | Maximum value                        |
| min           | None                         | Minimum value                        |

  ## 8. Set 
##### Features
- **DisjointSet:** A data structure that maintains a collection of disjoint (non-overlapping) sets. It supports operations like union and find, commonly used in algorithms such as Kruskal's for finding the Minimum Spanning Tree (MST).

##### Usage
#
```sh
 import { DisjointSet } from 'js-collections-kit';
  
  const disjointSet = new DisjointSet(6);
  ```
  
       ##### Methods 
###### - 2D Array
#
  | Name        | Parameters                   | Return                               |
|---------------|------------------------------|--------------------------------------|
| constructor   | size (number)                | None                                 |
| find          | element (number)             | Root element of the set containing element |
| union         | x (number), y (number)       | None                                 |
| isConnected     | x (number), y (number)       | Boolean |
| getParents    | None                         | Array of parent elements              |
| getRanks      | None                         | Array of ranks                       |
| getSetCount   | None                         | Number of distinct sets              |
