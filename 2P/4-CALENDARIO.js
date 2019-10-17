class CALENDARIO{

    todayPlus(dia, num) {
    
        if (dia == 1 || dia == "lunes"           ) {
            num = num+1;
        } else if (dia == 2 || dia == "martes"   ) {
            num = num + 2;
        } else if (dia == 3 || dia == "miercoles") {
            num = num + 3;
        } else if (dia == 4 || dia == "jueves"   ) {
            num = num + 4;
        } else if (dia == 5 || dia == "viernes"  ) {
            num = num + 5;
        } else if (dia == 6 || dia == "sabado"   ) {
            num = num + 6;
        } else if (dia == 7 || dia == "domingo"  ) {
            num = num ;
        }
    
        switch (num % 7) {
            case 0:
                this.num = "Domingo";
                break;
            case 1:
                this.num = "Lunes";
                break
            case 2:
                this.num = "Martes";
                break
            case 3:
                this.num = "Miercoles";
                break
            case 4:
                this.num = "Jueves";
                break;
            case 5:
                this.num = "Viernes";
                break;
            case 6:
                this.num = "Sabado";
                break;
        }
        return this.num;
    }
    
    isleapYear(anio){
        return ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? true : false;
    }
    
    friday13(anio){
        let count = 0;
    for (let month=0; month<12; month++) {
        let d = new Date(anio,month,13);
        if(d.getDay() == 5){
          count++;
       }
    }
    return count;   
    }
    
    firstDay(y){
        let x;
        x = new Date(y, 0, 1);
        return x;
    }
}


( function useCALENDARIO() {
    console.log(c1 = new CALENDARIO)
    console.log(c1.todayPlus(2, 9))
    console.log(c1.isleapYear(2019))
    console.log(c1.friday13(2019))
    console.log(c1.firstDay(2019))
})()


