import "./App.css";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  const myName = "";
  return (
    <div className="App">
      <header className="App-header">
      <Hero/>
      <Movies/>
        {myName ? <p>Welcome Back.</p> : <p>Please login above</p>}
        <p>Hello {myName || "guest"}.</p>
      </header>
    </div>
  );
}

export default App;
