let tblmenu = [
  {
    idmenu: 11,
    idkategori: 33,
    menu: "Mangga",
    gambar: "mangga.jpg",
    harga: 3000,
  },
  {
    idmenu: 12,
    idkategori: 33,
    menu: "Pepaya",
    gambar: "pepaya.jpg",
    harga: 5000,
  },
  {
    idmenu: 13,
    idkategori: 33,
    menu: "Jeruk",
    gambar: "jeruk.jpg",
    harga: 4000,
  },
  {
    idmenu: 30,
    idkategori: 47,
    menu: "Es Doger",
    gambar: "es_doger.jpg",
    harga: 3000,
  },
  {
    idmenu: 22,
    idkategori: 30,
    menu: "Ikan Bakar",
    gambar: "ikanbakar.jpg",
    harga: 5000,
  },
  {
    idmenu: 16,
    idkategori: 30,
    menu: "Sate",
    gambar: "sate.jpg",
    harga: 5000,
  },
];

let tampil = tblmenu.map(function (kolom) {
  return `<div class="produk-content">
  <div class="images">
    <img src="images/${kolom.gambar}" alt="" />
  </div>

  <div class="titel">
    <h2>${kolom.menu}</h2>
  </div>

  <div class="harga">
    <h2>Rp. ${kolom.harga}</h2>
  </div>

  <div class="btn-beli">
    <button data-idmenu=${kolom.idmenu}>Beli</button>
  </div>
</div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function () {
    // console.log(btnbeli[index].dataset["idmenu"]);
    // cart.push(btnbeli[index].dataset["idmenu"]);

    tblmenu.filter(function (a) {
      if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });
  };
}

// console.log(cart);
