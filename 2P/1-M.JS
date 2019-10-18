class Matrix {
    constructor(row, columns) {
      this.row = row;
      this.columns = columns;
      this.data = this.init();
    }
  
    init() {
      const temp = [];
  
      for (let i = 0; i < this.row; i++) {
        temp[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          temp[i][j] = 0;
        }
      }
  
      return temp;
    }
  
    initRandom() {
      for (let i = 0; i < this.row; i++) {
        this.data[i] = new Array(this.columns);
  
        for (let j = 0; j < this.columns; j++) {
          this.data[i][j] = (Math.round (Math.random () * 10));
        }
      }
  
      return this.data;
    }
  
    getRow(r) {
      
  
      return this.data[r];
    }
  
    getColumn(c) {
      const temp = [];
  
      
  
      for (let i = 0; i < this.row; i++) {
        temp.push(this.data[i][c]);
      }
  
      return temp;
    }
  
    isSquared() {
      if (this.columns === this.row) {
        return true;
      }
  
      return false;
    }
  
    isSymmetric() {
      this.isSquared();
  
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (this.data[i][j] != this.data[j][i]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    isIdentity() {
      this.isSymmetric();
  
      for (let i = 0; i < this.row; i++) {
        if (this.data[i][i] !== 1) {
          return false;
        }
      }
  
      return true;
    }
  
    getMatrix() {
      return this.data;
    }
  }

  (function UseMatri(){
    Heri = new Matrix(4,4)

    console.log(Heri.init())
    console.log(Heri.initRandom())
    console.log(Heri.isSquared())
    console.log(Heri.isSymmetric())
    console.log(Heri.isIdentity())

  })()