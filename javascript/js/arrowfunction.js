let fungsi = function (nama) {
    console.log("belajar function" + nama);
}

fungsi("joni");

let contoh = (nama) => {
    console.log("belajar function"+nama)
}

contoh("Budi");

let tambah = function (a,b) {
    return a + b;
}

console.log(tambah(2, 4));

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let hasil = a => a * 2;

console.log(hasil(4));

let lagi = () => console.log("coba lagi");

lagi();

let belajar = () => {
    console.log("baris satu");
    console.log("baris dua");
    console.log("baris tiga");
    console.log("baris selanjutnya");
};

belajar();

let nilai = 5;


let uji = nilai < 7 ? () => predikat = "Gagal" : () => predikat = "Lulus";
console.log(uji());

