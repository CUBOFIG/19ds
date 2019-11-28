let c = console.log
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class ubb {
  constructor(node) {
    this.node = node;
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
  

  insert(n, node = this.node) {
    if (!node.left) {
      node.left = n;
      return node;
    } else if (!node.right) {
      node.right = n;
      return node;
    } else if (node.right && !node.left.right) {
      return this.insert(n, node.left);
    } else if (node.left && !node.right.left) {
      return this.insert(n, node.right);
    } else if (node.right && !node.right.right) {
      return this.insert(n, node.right);
    } else {
      return this.insert(n, node.left);
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

//CREAR NODOS
const padre = new Node(1);
const hijo1 = new Node(2);
const hijo2 = new Node(3);
const hijo3 = new Node(4);
const hijo4 = new Node(5);
const hijo5 = new Node(6);
const hijo6 = new Node(7);
const hijo7 = new Node(8);
const hijo8 = new Node(9);
const hijo9 = new Node(10);
//CREAR ARBOL
const arbol= new ubb(padre);
//INSERTAR NODOS AL arbol
arbol.insert(hijo1);
arbol.insert(hijo2);
arbol.insert(hijo3);
arbol.insert(hijo4);
arbol.insert(hijo5);
arbol.insert(hijo6);
arbol.insert(hijo7);
arbol.insert(hijo8);
arbol.insert(hijo9);
//--------------------------------------
c('IMPRIMIR POR NIVELES');
c(arbol.bft());

c('PREORDEN');
arbol.preOrder();

arbol.remove(3); //REMUEVE NODO Y SUS HIJOS 
c('PREORDEN CON NODOS ELIMINADOS');
arbol.preOrder();

c('IMPRIMIR POR NIVELES');
c(arbol.bft());