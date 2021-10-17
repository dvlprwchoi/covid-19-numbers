// import { useEffect } from "react";
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import GlobalSummary from './components/GlobalSummary/GlobalSummary';
import USSummary from './components/USSummary/USSummary';
import GlobalVaccination from './components/GlobalVaccination/GlobalVaccination';
import USVaccination from './components/USVaccination/USVaccination';

function App() {
  // const getApiData = async () => {
  //   const url = "https://api.covid19api.com/summary";
  //   try {
  //     const response = await fetch (url);
  //     const data = await response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect (() => {
  //   getApiData();
  // }, []);
  return (
    <div className="App">
      <div className="appHeader">
        <h1>COVID-19 NUMBERS</h1>
        <Header />
      </div>
      <div className="appContent">
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/globalSummary" exact component={GlobalSummary} />
          <Route
            path="/globalVaccination"
            exact
            component={GlobalVaccination}
          />
          <Route path="/usSummary" exact component={USSummary} />
          <Route path="/usVaccination" exact component={USVaccination} />
        </main>
      </div>
    </div>
  );
}

export default App;
