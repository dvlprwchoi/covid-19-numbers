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
            <h2>US Summary Data</h2>
            <div className = "data">
                <li>Confirmed: {usSummary.confirmed}</li>
                <li>Recovered: {usSummary.recovered}</li>
                <li>Deaths: {usSummary.deaths}</li>
            </div>
        </div>


    );
}

export default USSummary;