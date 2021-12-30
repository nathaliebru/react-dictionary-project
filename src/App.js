import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
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
  );
}
