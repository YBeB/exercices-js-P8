//votre code ici
function pairNumbers(a,b){
const tab=[]
for  (let i=a; i<=b;i++){
if(i%2===0){
tab.push(i)

}

}
return tab.join(",")
}
export default pairNumbers
