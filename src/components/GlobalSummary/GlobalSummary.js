import { useEffect } from "react";

function GlobalSummary () {
    const getApiData = async () => {
        const url = "https://covid-api.mmediagroup.fr/v1";
        console.log(url);
        try {
            const response = await fetch (url);
            const data = await response.json();
            console.log(data);
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
            <li>Total Confirmed: </li>
            <li>Total Death: </li>
            <li>Total Recovered: </li>
            <li>New Confirmed: </li>
            <li>New Confirmed: </li>
            <li>New Death: </li>
        </div>
    );
}

export default GlobalSummary;