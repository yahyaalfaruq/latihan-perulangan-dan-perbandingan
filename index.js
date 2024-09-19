// optional chaining
const user = {
    address: {
        city: "solo"
    }
};
const city = user?.address?.city;
if (!city) {
    console.log("kota tidak ditemukan")
}
console.log(city);

// nullish coalescing
const newCity = city ?? "Online";
console.log("Kota:", newCity);

// rekursif
function factorial(n) {
    if (n === 0) return 1; {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

// matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i in matrix) {
    for (let j in matrix) {
        console.log(matrix[i][j]);
    }
}