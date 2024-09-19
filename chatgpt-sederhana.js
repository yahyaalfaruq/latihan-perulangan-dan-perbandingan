
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  const responseMap = {
    "halo": "Hai! Apa kabar?",
    "siapa kamu?": "Aku adalah bot sederhana.",
    "selamat tinggal": "Sampai jumpa lagi!"
  };

  while (true) {
    const question = await askQuestion('Anda: ');

    if (question === 'exit') {
      console.log("Bot: Sampai jumpa!");
      rl.close();
      break;
    }

    const response = responseMap[question] || "Maaf, saya tidak mengerti.";
    console.log(`Bot: ${response}`);
  }
})();