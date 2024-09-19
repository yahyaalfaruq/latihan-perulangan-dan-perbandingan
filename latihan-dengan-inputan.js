const { resolve } = require('path');
// Latihan Dengan Inputan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
    number = await askQuestion('Masukkan Nama Anda: ');
    console.log(`Selamat siang ${number}`);
    rl.close();
}) ();