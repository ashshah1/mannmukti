import styles from "../styles/Report.module.css"

export default function Report(props) {
  return (
    <div className={styles.report}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.description}>{props.description}</div>
      <a className={styles.link} href={props.link} target="_blank">download report</a>
    </div>
  );
}