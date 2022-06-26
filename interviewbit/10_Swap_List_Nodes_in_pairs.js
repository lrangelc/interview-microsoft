console.clear();

let head; // head of list

/* Linked list Node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function swapPairs(h) {
  // let temp = head;
  let temp = h;

  /* Traverse only till there are
        atleast 2 nodes left */
  while (temp != null && temp.next != null) {
    /* Swap the data */
    const k = temp.data;
    temp.data = temp.next.data;
    temp.next.data = k;
    temp = temp.next.next;
  }
}

/* Utility functions */

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /*
   * 1 & 2: Allocate the Node & Put in the data
   */
  const new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

/* Function to print linked list */
function printList() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + ' ');
    temp = temp.next;
  }
  console.log('');
}

/* Driver program to test above functions */

/* Created Linked List 1->2->3->4->5 */
push(5);
push(4);
push(3);
push(2);
push(1);

console.log('Linked List before calling pairWiseSwap() <br/>');
printList();

swapPairs(head);

console.log('Linked List after calling pairWiseSwap()<br/> ');
printList();

// Time complexity: O(N)

// As we traverse the linked list only once.

// Auxiliary Space: O(1)

// As constant extra space is used.

// https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/