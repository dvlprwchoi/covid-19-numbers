import { useEffect, useState } from "react";

function GlobalSummary () {
    const [globalSummaryData, setGlobalSummaryData] = useState ([]);
    const getApiData = async () => {
        // const url = "https://covid-api.mmediagroup.fr/v1/cases";
        const url = "https://api.covid19api.com/summary";
        console.log(url);
        try {
            const response = await fetch (url);
            const data = await response.json();
            console.log(data.Global);
            setGlobalSummaryData(data.Global);
        } catch (error) {
            console.log(error);
        }      
    }

    useEffect (() => {
        getApiData();
    }, []);

    return (
        <div className = "globalSummaryData">
            <h2>Global Summary Data</h2>
            <li>New Confirmed: {globalSummaryData.NewConfirmed}</li>
            <li>New Deaths: {globalSummaryData.NewDeaths}</li>
            <li>New Recovered: {globalSummaryData.NewRecovered}</li>
            <li>Total Confirmed: {globalSummaryData.TotalConfirmed}</li>
            <li>Total Deaths: {globalSummaryData.TotalDeaths}</li>
            <li>Total Recovered: {globalSummaryData.TotalRecovered}</li>
            {/* <li>Total Recovered: {globalSummaryData.all.recovered}</li> */}
        </div>
    );
}

export default GlobalSummary;