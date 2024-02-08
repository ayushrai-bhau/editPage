import Header from "./component/Header";
import Center from "./component/Center";

function App() {
  return (
    <>
      <img src="src\assets\wave.svg" alt="wave" className="wave" />

      <div className="app">
        <Header />

        <hr />
        <Center />
      </div>
    </>
  );
}

export default App;
