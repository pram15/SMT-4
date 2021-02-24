import { link } from "./link.js";

export function show() {
  let id = 11;
  link.get("/pelanggan/" + id).then((res) => {
    console.log(res);

    let tampil = `<table class="table">
          <tr>
            <th>ID</th>
            <th>Pelanggan</th>
            <th>Alamat</th>
            <th>Telepon</th>
          </tr>
        `;

    res.data.forEach((el) => {
      tampil += `<tr>
            <td>${el.idpelanggan}</td>
            <td>${el.pelanggan}</td>
            <td>${el.alamat}</td>
            <td>${el.telepon}</td>
          </tr>`;
    });

    tampil += `</table>`;

    document.querySelector("#out").innerHTML = tampil;
  });
}
