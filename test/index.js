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




