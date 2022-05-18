/**
 * Singly linked list
 */
const firstNode = {
  value: 'adam',
  next: null,
}

function addNode(previousNode, newValue) {
  const newNode = {
    value: newValue,
    next: parentNode
  };

  previousNode.next =  newNode;
}

function getLastNodeInList(firstNode) {
  let currentNode = firstNode.next;
  while(currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  return currentNode;
}

/**
 * Doubly linked list
 */
const firstNode2 = {
  value: 'adam',
  previous: null,
  next: null,
}

function addNode2(previousNode, newValue) {
  const newNode = {
    value: newValue,
    previous: previousNode,
    next: null,
  };

  previousNode.next =  newNode;
}

// getLastNodeInList method is unchanged for a doubly linked list


/**
 * Rough draft of a binary tree
 */
const root = {
  value: 'adam',
  parent: null,
  left: null,
  right: null,
}

// IMPORTANT: 'parentNode' must be the *immediate* parent of the new node,
// *NOT* the root of the whole tree.
function addTreeNode(parentNode, newValue) {
  const newNode = {
    value: newValue,
    parent: parentNode,
    left: null, 
    right: null,
  };

  // Note: This is the simplest way to add a node to a tree. No ordering, etc.
  if(!parentNode.left) {
    parentNode.left =  newNode;
  } else {
    parentNode.right = newNode;
  }

}