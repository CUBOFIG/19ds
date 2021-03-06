let c = console.log

class Graph {
    constructor(n) {
      this.rows = n;
      this.columns = n;
      this.data = this.init();
    }
  
    init() {
      let init = [];
  
      for (let i = 0; i < this.rows; i++) {
        init[i] = new Array(this.rows);
  
        for (let j = 0; j < this.columns; j++) {
          init[i][j] = 0;
        }
      }
      return init;
    }
  
    printGraph() {
      return this.data;
    }
  
    addVertex() {
      this.rows++;
      this.columns++;
      this.data.length++;
  
      for (let i = 0; i < this.data.length - 1; i++) {
        this.data[i].length++;
      }
      for (let i = this.data.length - 1; i < this.data.length; i++) {
        this.data[i] = new Array(this.data.length - 1);
  
        for (let j = 0; j < this.data.length; j++) {
          this.data[i][j] = 0;
          this.data[j][i] = 0;
        }
      }
    }
  
    addEdege(v1, v2, boolean) {
      this.data[v1][v2]++;
      if (boolean == true) {
        this.data[v2][v1]++;
      }
    }
  
    isComplete() {
      let temp = 0;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[i][i] != 0) {
            return false;
          } else if (this.data[i][j] == 1) {
            temp++;
          }
        }
      }
      if (temp == this.data.length * this.data.length - this.data.length) {
        return true;
      } else {
        return false;
      }
    }
  
    isMultigraph() {
      let temp = 0;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data.length; j++) {
          if (this.data[i][i] != 0 || this.data[i][j] > 1) {
            temp++;
          }
        }
      }
      if (temp != 0) {
        return true;
      } else {
        return false;
      }
    }
  
  }

  
  GRAFO = new Graph(4);
  
  GRAFO.addEdege(0, 1, true);
  GRAFO.addEdege(2, 0, true);
  GRAFO.addEdege(1, 0, true);
  GRAFO.addEdege(2, 1, true);
  GRAFO.addEdege(1, 0, true);

c(GRAFO.printGraph());
c(`IS ${GRAFO.isComplete()}`);
c(`IS ${GRAFO.isMultigraph()}`);