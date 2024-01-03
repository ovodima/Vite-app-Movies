import NavBar from "./components/NavBar";
import styles from "./constans/styles";
import "./index.css";

function App() {
  return (
    <div className=" w-full h-full bg-gradient-to-r from-backgroundColor via-orangeColor to-secondary">

      <div>
        <div className={styles.paddingX}>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
