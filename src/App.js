import "./styles.css";
import Weather from "./Weather";
import Days from "./Days";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather />

      <Days />
      <footer>
        <p>
          This App was coded by Sheillah Wafula and is
          <a
            href="https://github.com/Sheillah27/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
