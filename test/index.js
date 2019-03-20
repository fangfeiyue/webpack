function getResult(secret, guess) {
  let countA = 0;
  let countB = 0;

  for (let i = 0, len = guess.length; i < len; i++){
    if (guess[i] == secret[i]) {
      countA++;
    }else if (secret.includes(guess[i])){
      countB++;
    }
  }
  console.log(`${countA}A${countB}B`);
}
getResult('9876', '4567'); // 0A2B


let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let result = Array.from(new Set([...arr1, ...arr2]));
console.log('并集===》', result);

let arr3 = [...arr1, ...arr2];

let count1 = 0;
let count = arr3.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
    count1++;
    console.log(count1, name)
    if (count1 >= 2) {
      alert(name);
    }
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log('交集===》', count);

