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
            <h1> Jumlah kasus di dunia </h1>
            <h1 className= "header-container" > Positif: {confirmed}</h1>
            <h1 className= "card-container" > Meninggal: {deaths}</h1>
            <h1 className= "last-container" > Sembuh: {recovered}</h1>
            </center>
        </div>

    );
};

export default Dunia;