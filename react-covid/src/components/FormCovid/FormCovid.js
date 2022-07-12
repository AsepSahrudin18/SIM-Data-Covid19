import assets from "../../Assets/images/conceptual.svg";
import { useState } from "react";
import StyledForm from "./Form.styled";
import Button from "../ui/Button";

function FormCovid(props) {
  const { provs, setProvs } = props;

  // Membuat state handle form
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState("");

  // Membuat state handle error
  const [isCountEmpty, setIsCountEmpty] = useState(false);
  const [isProvEmpty, setProvEmpty] = useState(false);
  const [isStatusEmpty, setIsStatusEmpty] = useState(false);
  // Membuat state untuk menampilkan pesan alert ketika semua data terpenuhi
  const [isDataSucess, setIsDataSucess] = useState(false);

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleCount(e) {
    setCount(e.target.value);
  }

  function updateProvinces() {
    const index = provs.findIndex((item) => item.kota === city);
    const foundProvince = provs.find((item) => item.kota === city);

    provs[index] = {
      ...foundProvince,

      [status]: parseInt(foundProvince[status]) + parseInt(count),
    };

    return setProvs([...provs]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (city === "") {
      setProvEmpty(true);
    } else if (status === "") {
      setIsStatusEmpty(true);
      setProvEmpty(false);
    } else if (count === "") {
      setIsCountEmpty(true);
      setIsStatusEmpty(false);
    } else if (count !== "") {
      setIsDataSucess(true);
      setIsCountEmpty(false);
      updateProvinces();
    } else {
    }
  }

  return (
    <StyledForm>
      <section>
        <div className="form__left">
          <img src={assets} alt="placeholder" />
        </div>

        <div className="form__right">
          <h2>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            {/* jika semua data sucess true: tampilkan pesan berhasil submit*/}
            {isDataSucess ? <h5>Selamat data berhasil ditambahkan!</h5> : ""}

            <label htmlFor="label">Provinsi</label>
            <select name="provinsi" id="" onChange={handleCity} value={city}>
              {provs.map(function (provins) {
                return (
                  <option key={provins.kota} value={provins.kota}>
                    {provins.kota}
                  </option>
                );
              })}
            </select>
            {/* jika option true: tampilkan data */}
            {isProvEmpty ? <p> Pilih Provinsi untuk efisiensi data</p> : ""}

            <label htmlFor="label">Status</label>
            <select name="status" id="" onChange={handleStatus} value={status}>
              <option value="kasus">Postif</option>
              <option value="sembuh">Sembuh</option>
              <option value="meninggal">Meninggal</option>
              <option value="dirawat">Dirawat</option>
            </select>
            {/* jika status error true: tampilkan  */}
            {isStatusEmpty ? <p>Status Wajib diisi</p> : ""}

            <label htmlFor="label">Jumlah</label>
            <input
              type="number"
              placeholder="0"
              onChange={handleCount}
              value={count}
            />

            {/* jika jumlah error true: munculkan error */}
            {isCountEmpty ? (
              <p>Jumlah wajib diisi atau lebih besar dari 0</p>
            ) : (
              ""
            )}

            {/* <button>Submit</button> */}
            <Button>Submit</Button>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}
export default FormCovid;
