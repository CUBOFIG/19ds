
function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let formula = 0
let x=1

for(let i = 0; i <= 9;i++){
    formula += Math.pow(x,i)/factorial(i)

}

console.log(`formula ${formula}`)  