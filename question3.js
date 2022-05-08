/* Para rodar o programa, basta abrir o terminal e digitar $ node question3.js > resultado3.txt
    o Node ira gerar um arquivo de nome resultado3.txt com a resposta*/

const subsetSum=(n,t,p=[],s=0,r=[])=>(s<t?n.forEach((l,i)=>subsetSum(n.slice(i+1),t,[...p,l],s+l,r)):s==t?r.push(p):0,r);

var n = 20 // Alterar o valor de N
console.log(n)
console.log(subsetSum([3,9,8,4,5,7,10,6], n)); //Alterar dentro da array [] os valores do vetor

