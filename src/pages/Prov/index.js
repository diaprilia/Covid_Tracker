import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState } from 'react';
import axios from "axios"
import { Table } from "react-bootstrap";



const Prov = () => {

  const [ProvinsidiIndonesia, setProvinsi] = useState([]);
  useEffect(() => {


    axios 
     .get
     ("https://indonesia-covid-19.mathdro.id/api/provinsi")
     .then((response) =>
    { 
     setProvinsi(response.data.data);
    })  
}, []);



    console.log(ProvinsidiIndonesia);
    return( 

    <center>

      <Table striped bordered hover className = "mt-5">


    <thead style={{ textAlign: 'center', fontWeight: 'bold',
    fontSize: 10, color: 'white', backgroundColor: 'red'}}>
  
  
  
      <tr>
          
        <th>N O</th>
        <th>P R O V I N C E</th>
        <th>C O N F I R M E D</th>
        <th>R E C O V E R E D</th>
        <th>D E A T H S</th>

      </tr>

    </thead>


    <tbody style={{ textAlign: 'center',  fontWeight: 'bold',
    fontSize: 10, color: 'white', backgroundColor: 'black' }}>

      {ProvinsidiIndonesia.map((item, index) => {


                  return(
            <tr>
                          <th scope="row" key={item.fid}>{index + 1}</th>
                          <th>{item.provinsi}  </th>
                          <th>{item.kasusPosi} </th>
                          <th>{item.kasusSemb} </th>
                          <th>{item.kasusMeni} </th>
                      
                       </tr>
                        )
                            }
                                  )
                                    }

    </tbody>

  </Table>

  </center>

  );
        }   

export default Prov;
