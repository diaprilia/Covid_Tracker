import React, { useEffect, useState } from "react";
import axios from "axios"


const Indo = () => {
    const [sembuh, setSembuh] = useState([]);
    const [perawatan, setPerawatan] = useState([]);
    const [meninggal, setMeninggal] = useState([]);
   
    useEffect(() => {
    axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then((response) => 
        {
        setSembuh(response.data.sembuh);
        setPerawatan(response.data.perawatan);
        setMeninggal(response.data.meninggal);
        })   
        
    },[]);
    
    return (
        <div>
            <center>
            <h1> <font size= '5'>Covid-19 Cases in Indonesia</font></h1>
            <p></p>
            <p></p>
            <h1 className= "header-container" > Confirmed: {perawatan}</h1>
            <h1 className= "card-container" > Deaths: {meninggal}</h1>
            <h1 className= "last-container" > Recovered: {sembuh}</h1>
           </center>
        </div>

    );
};

export default Indo;