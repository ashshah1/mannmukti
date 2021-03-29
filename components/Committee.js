import styles from "../styles/Comm.module.css"

export default function Committee(props) {
  console.log(props);
  let className = props.filled ? "committee-filled" : "committee-outlined";
  return (
    <div className={styles[className]}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.summary}>{props.summary}</div>
      <div className={styles.info}>
        {props.info.split(";").map(i => {return (<li>{i}</li>)})}
      </div>
    </div>
  );
}