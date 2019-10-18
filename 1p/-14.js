const PRIMOS = (n) => {
    
    let number = 2
    let primoz = 1

    while (n > 0) {
        primoz = 1
        for ( let i = 2; i < number; i++) {
            if (number % i === 0) {
                
                primoz = 0

                break;
            }
        }

        if (primoz) {
            console.log(number)
            n--
        }

        number++
    }
}

console.log(PRIMOS(10))