// array -> string, number, objek, function, campuran

let nilai = [
  { nama: "budi", ipa: 90, bahasa: 70, matematika: 80 },
  { nama: "joni", ipa: 80, bahasa: 90, matematika: 90 },
  { nama: "tejo", ipa: 75, bahasa: 89, matematika: 78 },
  { nama: "siti", ipa: 90, bahasa: 90, matematika: 85 },
];

let nama = ["budi", "joni", "tejo", "siti"];
// nama.push("ani", "roma");

// console.log(nama.shift());

// nama.unshift("bobi", "roki");

/* mengambil tanpa menghapus tempat asal */
// console.log(nama.slice(0, 3));

let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn", "sejarah"]));

/* mengambil dengan meghapus tempat asal */
// console.log(nama.splice(5, 2));

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//   const element = nama[index];
// }

// nama.forEach(function (a) {
//   console.log(a);
// });

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//   if (a.ipa > 80) {
//     console.log(a.nama);
//   }
// });

// console.log(nilai);

nilai.filter((a) =>
  a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null
);

// push = menambahkan diakhir
// pop = mengambil diakhir
// shift = mengambil diawal
// unshift = menambahkan diawal
