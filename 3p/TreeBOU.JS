let c = console.log
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeBOU {
    constructor(node) {
      this.node = node;
    }
  
    insert(n, node = this.node) {
      if (n.data < node.data && node.left === null) {
        node.left = n;
        return node;
      } else if (n.data > node.data && node.right === null) {
        node.right = n;
        return node;
      } else if (n.data < node.data && node.left) {
        return this.insert(n, node.left);
      } else if (n.data > node.data && node.right) {
        return this.insert(n, node.right);
      }
    }
  
    remove(key, node = this.node) {
        if (node == null) {
          return null;
        }
        if (node.left.data === key) {
          node.left = null;
          return node;
        } else if (node.right.data === key) {
          node.right = null;
          return node;
        } else if (node.right && !node.left.right) {
          return this.remove(key, node.left);
        } else if (node.left && !node.right.left) {
          return this.remove(key, node.right);
        } else if (node.right && !node.right.right) {
          return this.remove(key, node.right);
        } else {
          return this.remove(key, node.left);
        }
      }
  
    bft(node = this.node) {
      let queue = [];
      let print = [];
  
      queue.push(node);
  
      while (queue.length) {
        let nodeTemp = queue.shift();
  
        print.push(nodeTemp.data);
  
        if (nodeTemp.left) {
          queue.push(nodeTemp.left);
        }
  
        if (nodeTemp.right) {
          queue.push(nodeTemp.right);
        }
      }
  
      return print;
    }
  
    preOrder(node = this.node) {
      console.log(node.data);
  
      if (node.left) {
        this.preOrder(node.left);
      }
  
      if (node.right) {
        this.preOrder(node.right);
      }
    }
  }
//--------------------------------------
const padre = new Node(5);
const hijo1 = new Node(2);
const hijo2 = new Node(10);
const hijo3 = new Node(7);
const hijo4 = new Node(4);

const TREEP = new TreeBOU(padre);

TREEP.insert(hijo1);
TREEP.insert(hijo2);
TREEP.insert(hijo3);
TREEP.insert(hijo4);

//--------------------------------------

c('BTF');
c(TREEP.bft());

c('preOrden');
TREEP.preOrder();

TREEP.remove(2);

c('preOrden');
TREEP.preOrder();