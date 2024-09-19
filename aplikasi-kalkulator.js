
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  const num1 = parseFloat(await askQuestion('Masukkan angka pertama: '));
  const operator = await askQuestion('Masukkan operator (+, -, *, /): ');
  const num2 = parseFloat(await askQuestion('Masukkan angka kedua: '));

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Operator tidak valid');
      rl.close();
      return;
  }

  console.log(`Hasil: ${result}`);
  rl.close();
})();