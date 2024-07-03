// Créez votre fonction ici
function calculateAverage(averages){
if(!averages || averages.length===0)
{return "No numbers to calculate average"}
let sum=0;
for (let average of averages ){
sum+=average

}
return sum/=averages.length
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
