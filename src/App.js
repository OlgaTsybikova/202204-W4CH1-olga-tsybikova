import Gentleman from "./components/Gentlemen/Gentleman";
import senyores from "./components/senyores";
import "./index.css";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman {...senyores[0]} />
          <Gentleman {...senyores[1]} />
          <Gentleman {...senyores[2]} />
          <i className="icon gentleman__icon fas fa-check"></i>
        </ul>
      </main>
    </div>
  );
}

export default App;
