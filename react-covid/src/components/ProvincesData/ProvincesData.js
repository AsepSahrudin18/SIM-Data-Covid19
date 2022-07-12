import Province from "../Province/Province";
import styles from "./ProvincesData.module.css";

function ProvincesData(props) {
  const { provs } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.table__title}>Provinsi</h1>

      <h2 className={styles.table__text}>Data Covid Provinsi</h2>
      <div className={styles.table__container}>
        <table className={styles.group__table}>
          <thead>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
            <th>Dirawat</th>
          </thead>
          <tbody>
            {provs.map(function (provin) {
              return <Province key={provin.kota} provin={provin} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProvincesData;
