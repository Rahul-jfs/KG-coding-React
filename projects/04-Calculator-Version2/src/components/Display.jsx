import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      value={displayValue}
      className={styles.display}
      readOnly
    />
  );
};

export default Display;
