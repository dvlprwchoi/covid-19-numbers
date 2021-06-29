import { useEffect } from "react";

function WorldSummary () {
    const getApiData = async () => {
        const url = "https://api.covid19api.com/summary";
        console.log(url);
        try {
            const res = await fetch (url);
            const data = await res.json();
        } catch (err) {
            console.log(err);
        }      
    }

    useEffect (() => {
        getApiData();
    }, []);

    return (
        <h2>Hello from World Summary</h2>
    );
}

export default WorldSummary;