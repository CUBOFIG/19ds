class Factorial {
  constructor(nu) {
      this.nu = nu;
  }
  Value(nu= this.nu ) {

      function value(nu) {

          if (nu <= 1) {

             return 1;

          } else {

              return nu * value(nu - 1);
          }
      }
      return value(nu);
  }
  Cost( nu = this.nu ) {

      let cont = 0;

      function value(nu) {

          if (nu <= 1) {

              cont++;
          } else {

              cont++;

              return nu * value(nu - 1);
          }
      }
      value(nu);

      return cont;
  }
  Sucesion() {

      let sucesion = [];

      for (let i = 1; i <= this.nu; i++) {

          sucesion.push(this.Value(i));
      }
      return sucesion;
  }
  Table() {

      console.log("Num-Costo-Valor");

      for (let i = 1; i <= this.nu; i++) {

          console.log("X(" + i + ") - " + this.Cost(i) + " - " + this.Value(i));
      }
  }
}
let HERRI = new Factorial(5);

console.log(HERRI.Value());
console.log(HERRI.Sucesion());
console.log(HERRI.Cost());
console.log(HERRI.Table());