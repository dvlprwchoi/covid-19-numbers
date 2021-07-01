import { useEffect, useState } from "react";

function States () {
    const [states, setStates] = useState ([]);
    const getApiData = async () => {
        const url = "https://covid-api.mmediagroup.fr/v1/cases?country=US";
        try {
            const response = await fetch (url);
            const data = await response.json ();
            console.log(data);
            setStates (data.All);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect (() => {
        getApiData ();
    }, []);
    return (
        <div className = "statesData">
            <h2>States Data</h2>
            <div className = "data">
                <li>State: </li>
                <li>Confirmed: </li>
                <li>Recovered: </li>
                <li>Deaths: </li>
            </div>
        </div>
    );
}

export default States;