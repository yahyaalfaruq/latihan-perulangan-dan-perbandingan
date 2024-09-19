
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 1000; // saldo awal

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  console.log("Selamat datang di ATM");

  while (true) {
    console.log("Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar");
    const choice = await askQuestion('Pilihan Anda: ');

    switch (choice) {
      case '1':
        console.log(`Saldo Anda: ${balance}`);
        break;
      case '2':
        const withdrawAmount = parseFloat(await askQuestion('Masukkan jumlah tarik: '));
        if (withdrawAmount > balance) {
          console.log('Saldo tidak cukup.');
        } else {
          balance -= withdrawAmount;
          console.log(`Anda menarik: ${withdrawAmount}. Saldo baru: ${balance}`);
        }
        break;
      case '3':
        const depositAmount = parseFloat(await askQuestion('Masukkan jumlah setor: '));
        balance += depositAmount;
        console.log(`Anda menyetor: ${depositAmount}. Saldo baru: ${balance}`);
        break;
      case '4':
        console.log('Terima kasih telah menggunakan ATM kami.');
        rl.close();
        return;
      default:
        console.log('Pilihan tidak valid.');
    }
  }
})();