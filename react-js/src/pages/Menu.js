import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
  const titel = "Daftar Menu Restoran";
  const [menus, setMenu] = useState([
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
  ]);
  return (
    <div className="App">
      <Tabel menu={menus} titel={titel} />
      <Tabel
        menu={menus.filter((data) => data.idkategori === 47)}
        titel="MENU BUAH"
      />
    </div>
  );
}

export default Menu;
