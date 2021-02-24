import { link } from "./link.js";

export function ubah() {
  let id = 2;
  let data = {
    pelanggan: "update axios export",
    alamat: "update axios export",
    telepon: "024092350",
  };

  link.put("/pelanggan/" + id, data).then((res) => {
    console.log(res);
    let tampil = `<h1>${res.data.pesan}</h1>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}
