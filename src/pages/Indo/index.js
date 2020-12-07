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
            <h1 className= "header-container" > Positif: {perawatan}</h1>
            <h1 className= "card-container" > Meninggal: {meninggal}</h1>
            <h1 className= "last-container" > Sembuh: {sembuh}</h1>
            
        </div>

    );
};

export default Indo;