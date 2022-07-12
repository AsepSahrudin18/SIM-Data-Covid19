import styles from "./Province.module.css";

function Province(props) {
  const { provin } = props;

  return (
    <>
      <tr className={styles.row__table}>
        <td>{provin.kota}</td>
        <td>{provin.kasus}</td>
        <td>{provin.sembuh}</td>
        <td>{provin.meninggal}</td>
        <td>{provin.dirawat}</td>
      </tr>
    </>
  );
}

export default Province;
