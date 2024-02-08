import Header from "./component/Header";
import Center from "./component/Center";
import Wave from "./assets/wave.svg"

function App() {
  return (
    <>
      <img src={Wave} alt="wave" className="wave" />

      <div className="app">
        <Header />

        <hr />
        <Center />
      </div>
    </>
  );
}

export default App;
