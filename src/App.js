import { Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import GlobalSummary from './components/GlobalSummary/GlobalSummary';

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
          <Route path = "/globalSummary" exact component = {GlobalSummary} />
        </main>
        
      </div>
    </div>
  );
}

export default App;
