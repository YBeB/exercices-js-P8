function convertToBinary(){
let decimalInput=document.getElementById("decimalInput").value;
let binaryResult=document.getElementById("binaryResult");


if (!decimalInput || decimalInput===""){
binaryResult.textContent="Veuillez entrer un nombre décimal valide."
return;
}
let decimalNumber=parseInt(decimalInput,10);
let binaryNumber=decimalNumber.toString(2);

binaryResult.textContent=`Binaire :${binaryNumber}`

}