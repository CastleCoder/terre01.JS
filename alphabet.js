const alphabetArray = ["abcdefghijklmnopqrstuvwxyz\n"];
for(let i=0; i<alphabetArray.length;i++){

  console.log(alphabetArray[i]);
}




const a = 97;
const z = 122;
let Array = [];

for (let i=a; i<=z; i++){
  let result = String.fromCharCode(i);
  let resultInArray = Array.push(result);
}
console.log(Array.join("")+"\n");