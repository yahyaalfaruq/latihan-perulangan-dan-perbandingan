const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const password = "123456"; // Static password for login
let orders = []; // Array to store orders
let nextId = 1; // Order ID tracker

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function login() {
  let userPassword = await askQuestion("Masukkan password: ");

  if (userPassword === password) {
    console.log("Login berhasil!\n");
    showMenu();
  } else {
    console.log("Password salah, coba lagi.");
    rl.close();
  }
}

async function showMenu() {
  console.log("===== MENU UTAMA =====");
  console.log("1. Buat pesanan baru");
  console.log("2. Lihat semua pesanan");
  console.log("3. Perbarui pesanan");
  console.log("4. Hapus pesanan");
  console.log("5. Keluar");
  console.log("======================");

  const choice = await askQuestion("Pilih opsi: ");
  handleMenu(choice);
}

async function handleMenu(choice) {
  switch (choice) {
    case "1":
      await createOrder();
      break;
    case "2":
      await viewOrders();
      break;
    case "3":
      await updateOrder();
      break;
    case "4":
      await deleteOrder();
      break;
    case "5":
      console.log("Keluar dari aplikasi...");
      rl.close();
      break;
    default:
      console.log("Pilihan tidak valid.");
      await showMenu();
  }
}

async function createOrder() {
  const namaCustomer = await askQuestion("Masukkan Nama Anda: ");
  const namaProduk = await askQuestion("Masukkan Nama Produk: ");
  const jumlahProduk = await askQuestion("Masukkan Jumlah Produk: ");

  const order = {
    id: nextId++,
    namaCustomer,
    namaProduk,
    jumlahProduk,
  };

  orders.push(order);
  console.log("Pesanan berhasil ditambahkan");
  showMenu();
}

async function viewOrders() {
  if (orders.length === 0) {
    console.log("Tidak ada Pesanan");
  } else {
    console.log("daftar Pesanan");
    orders.forEach((order) => {
      console.log(
        `id: ${order.id}, nama pelanggan: ${order.namaCustomer}, jumlah produk: ${order.jumlahProduk}`
      );
    });
  }
  showMenu();
}

async function deleteOrder() {
  const orderId = await askQuestion("Masukkan id yang ingin dihapus: ");
  const index = orders.findIndex((order) => order.id === parseInt(orderId));

  if (index !== -1) {
    orders.splice(index, 1);
    console.log(`id dengan ${orderId} berhasil dihapus`);
  } else {
    console.log("Pesanan tidak ditemukan");
  }
  await showMenu();
}

login();

/*
output:
Masukkan password: 123456
Login berhasil!

===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 1
Masukkan Nama Anda: yahya
Masukkan Nama Produk: teh
Masukkan Jumlah Produk: 1
Pesanan berhasil ditambahkan
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 2
daftar Pesanan
id: 1, nama pelanggan: yahya, jumlah produk: 1
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 3
D:\PROGRAMMING\tugas-js\latihan-perulangan-dan-perbandingan\tugas.js:50
      await updateOrder();
      ^

ReferenceError: updateOrder is not defined
    at handleMenu (D:\PROGRAMMING\tugas-js\latihan-perulangan-dan-perbandingan\tugas.js:50:7)       
    at showMenu (D:\PROGRAMMING\tugas-js\latihan-perulangan-dan-perbandingan\tugas.js:38:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v20.16.0 
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 4
Masukkan id yang ingin dihapus: 1
Pesanan tidak ditemukan
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 5
Keluar dari aplikasi...
*/
