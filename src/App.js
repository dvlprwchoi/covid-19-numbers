import { Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import WorldSummary from './components/WorldSummary/WorldSummary';

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <h1>COVID-19 NUMBERS</h1>
        <Header />      
      </div>
      <div className="appContent">
        <main>
          <Route path = "/" exact component = {Home} />
          <Route path = "/worldSummary" component = {WorldSummary} />
        </main>
        
      </div>
    </div>
  );
}

export default App;
