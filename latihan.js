// Mencetak Bilangan Genap dari 1 hingga 20
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} // output: 2, 4, 6, 8, 10, 12, 14, 16,18

//  Menentukan Bilangan Terbesar
const a = 10;
const b = 25;
const c = 15;
let terbesar;
if (a > b && a > c) {
  terbesar = a;
} else if (b > a && b > c) {
  terbesar = b;
} else {
  terbesar = c;
}
console.log(`Bilangan Terbesar adalah ${terbesar}`); // output: 25

// Mencetak Tabel Perkalian
const angka = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}
/*
    output: 5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50
*/

// Menghitung Jumlah Digit Bilangan
const bilangan = 12345;
let jumlahDigit = 0;
let temp = bilangan;
while (temp > 0) {
  temp = Math.floor(temp / 10);
  jumlahDigit++;
}
console.log(`Jumlah digit dari ${bilangan} adalah ${jumlahDigit}`); // output: Jumlah digit dari 12345 adalah 5

// Menentukan Tahun Kabisat
const tahun = 2024;
if ((tahun % 4 === 0 && tahun % 100 != 0) || tahun % 400 === 0) {
  console.log(`${tahun} adalah tahun kabisat`);
} else {
  console.log(`${tahun} bukan tahun kabisat`);
} // 2024 adalah tahun kabisat

// Menghitung Faktorial Bilangan
const n = 5;
let faktorial = 1;
for (let i = 1; i <= n; i++) {
  faktorial *= i;
}
console.log(`Faktorial dari ${n} adalah ${faktorial}`); // output: Faktorial dari 5 adalah 120

//  Mencetak Deret Fibonacci
const jumlahBilangan = 10;
let a2 = 0,
  b2 = 1;
for (let i = 0; i < jumlahBilangan; i++) {
  console.log(a2);
  let temp = a2;
  a2 = b;
  b2 = temp + b2;
}

// Menjumlahkan Bilangan Genap dalam Array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlahGenap = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    jumlahGenap += array[i];
  }
}
console.log(`Jumlah Bilangan genap adalah ${jumlahGenap}`); // output: 30

// Mencetak Bintang Segitiga
const tinggi = 5;
for (let i = 1; i <= tinggi; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}
/*
    output: *
    **
    ***
    ****
    *****
*/

// Menghitung Rata-rata Nilai
const nilai = [80, 90, 85, 70, 95];
let total = 0;
for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}
const rataRata = total / nilai.length;
console.log(`Rata rata nilai adalah ${rataRata}`); // output: 84