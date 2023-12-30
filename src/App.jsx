import NavBar from "./components/NavBar";
import styles from "./constans/styles";
import "./index.css";

function App() {
  return (
    <div className="bg-backgroundColor w-full h-full overflow-hidden">
      <div >
        <div className={styles.paddingX}>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
