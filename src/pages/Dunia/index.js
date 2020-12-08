import React, { useEffect, useState } from "react";
import axios from "axios";

const Dunia = () => {
    const [recovered, setRecovered] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
   
    useEffect(() => {
    axios
        .get("https://covid19.mathdro.id/api")
        .then((response) => 
        {
        setRecovered(response.data.recovered.value);
        setConfirmed(response.data.confirmed.value);
        setDeaths(response.data.deaths.value);
        })   
        
    },[]);
    
    return (
        <div>
            <center>
            <h1> <font size= '5'>Covid-19 Cases Worldwide</font></h1>
            <p></p>
            <p></p>
            <h1 className= "header-container" > Confirmed: {confirmed}</h1>
            <h1 className= "card-container" > Deaths: {deaths}</h1>
            <h1 className= "last-container" > Recovered: {recovered}</h1>
            </center>
        </div>

    );
};

export default Dunia;