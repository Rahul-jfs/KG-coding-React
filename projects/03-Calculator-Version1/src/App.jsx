import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.flex}>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </div>
  );
}

export default App;
