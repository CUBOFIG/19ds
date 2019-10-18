class Factorial {
  constructor(n) {
    this.costo = 0
    this.succession = []
    this.table = []
  }
  
  getValue(num =this.num) { 
    
    function value(num){
    return num<=1 ? 1:  num*value(num-1)
    }
    return value(num);
  }

  getCost(num=this.num) {
       let cont=0;
       function value(num){
        if(num <=1){
          cont++;
          return num;
        } else{
          cont++;
          return num*value(num-1);
        }
       }
       value(num);
       return cont;
  }
  
  getSuccesion() {
      for (let i = 1; i <= this.num; i++) {
        console.log("Fibonacci de " + i + " es: " + this.getValue(i) + "\n");
      }
    }
  
    getTable() {
      console.log("N - Cost - Value")
      for (let i = 0; i <= this.num; i++) {
        console.log('f(' + i + ') - ' + this.getCost(i) + ' - ' + this.getValue(i));
      }
  }
}
( function usefactorial() {
  c1 = new Factorial(5)
  console.log(c1.getValue())
  console.log(c1.getCost())
  console.log(c1.getSuccesion())
  console.log(c1.getTable())
})()