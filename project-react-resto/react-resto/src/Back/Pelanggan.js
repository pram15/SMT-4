import useGet from "../Hook/useGet";
import useDelete from "../Hook/useDelete";

const Pelanggan = () => {
  const [isi] = useGet("/pelanggan");
  const { hapus, pesan } = useDelete("/pelanggan/");

  let no = 1;
  return (
    <div>
      <div className="row">
        <h2>Menu Pelanggan</h2>

        <div className="row">
          <div>
            <p>{pesan}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Pelanggan</th>
              <th>Alamat</th>
              <th>Telepon</th>
              <th>Hapus</th>
            </tr>
          </thead>
          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.pelanggan}</td>
                <td>{val.alamat}</td>
                <td>{val.telepon}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => hapus(val.idpelanggan)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pelanggan;
