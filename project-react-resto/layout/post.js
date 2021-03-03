import { link } from "./link.js";

export function post() {
  let data = {
    pelanggan: "pelanggan axios export",
    alamat: "alamat axios export",
    telepon: "096780489",
  };

  link.post("/pelanggan", data).then((res) => {
    // console.log(res);
    let tampil = `<h1>${res.data.pesan}</h1>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}
