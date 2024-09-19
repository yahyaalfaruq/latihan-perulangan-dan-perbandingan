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

async function updateOrder() {
    const index = orders.findIndex(order => order.id);
  if (index !== -1) {
    const namaCustomer = await askQuestion("Masukkan Nama Baru Anda: ");
    const namaProduk = await askQuestion("Masukkan Nama Baru Produk: ");
    const jumlahProduk = await askQuestion("Masukkan Jumlah Baru Produk: ");

    orders[index].namaCustomer = namaCustomer;
    orders[index].namaProduk = namaProduk;
    orders[index].jumlahProduk = jumlahProduk;

    console.log(`Pesanan ${orderId} diperbarui`);
  } else {
    console.log("Pesanan tidak ditemukan");
  }
  await showMenu();
}

async function deleteOrder() {
    const orderId = await askQuestion("Masukkan id yang ingin dihapus: ");
    const index = orders.findIndex(order => order.id === parseInt(orderId));

    if(index !== -1) {
        orders.splice(index, 1);
        console.log(`id dengan ${orderId} berhasil dihapus`);
    } else {
        console.log("Pesanan tidak ditemukan");
    }
    await showMenu();
}

login();
