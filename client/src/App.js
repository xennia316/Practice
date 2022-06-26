import "./App.css";
import FullPage from "./FullPage";
import ButtonSection from "./ButtonSection";
import styles from "./ButtonSection.module.css";

function App() {
  return (
    <div className="App">
      <section className={styles.fullCalc}>
        <FullPage />
        <ButtonSection />
      </section>
    </div>
  );
}

export default App;
