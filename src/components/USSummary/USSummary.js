import { useEffect, useState } from "react";

function USSummary () {
    const [usSummary, setUsSummary] = useState ([]);
    const getApiData = async () => {
        const url = "https://covid-api.mmediagroup.fr/v1/cases";
        try {
            const response = await fetch (url);
            const data = await response.json();
            console.log(data.US.All);
            setUsSummary(data.US.All);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect (() => {
        getApiData ();
    }, []);
    return (
        <div className = "usSummaryData">
            <h2>US Summary</h2>
            <li>Confirmed: {usSummary.confirmed}</li>
            <li>Recovered: {usSummary.recovered}</li>
            <li>Deaths: {usSummary.deaths}</li>
        </div>


    );
}

export default USSummary;