import "./App.css";
import FullPage from "./FullPage";
import styles from "./ButtonSection.module.css";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.fullCalc}>
        <FullPage />
      </section>
    </div>
  );
}

export default App;
