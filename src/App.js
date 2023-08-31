import logo from "./logo.svg";
import "./styles.css";
import Weather from "./Weather";
import Days from "./Days";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <Days />
      <footer>
        <p>
          This App was coded by Sheillah Wafula and is
          <a
            href="https://github.com/Sheillah27/Sheillah--Portfolio/commits?author=Sheillah27&since=2023-06-30&until=2023-07-01"
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
