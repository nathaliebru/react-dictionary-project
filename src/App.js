import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>English Dictionary</h1>
        <h2>What word do you want to look up?</h2>
        <Dictionary />
        <footer>
          {" "}
          <a
            href="https://github.com/nathaliebru/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Nathalie Bruinhof
        </footer>
      </div>
    </div>
  );
}
