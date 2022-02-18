import "./App.css";

import Cards from "./Components/Cards";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
