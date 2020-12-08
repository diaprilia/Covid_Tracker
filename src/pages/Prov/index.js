// // 
// import React, { Component } from 'react'
// import axios from 'axios'
// import ReactTable from "react-table"; 
// import 'react-table/react-table.css'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       provinsi:[],
//       loading:true
//     }
//   }
//   async getProvinsiData(){
//     const res = await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi')
//     console.log(res.data)
//     this.setState({loading:false, prov: res.data.data})
//   }
//   componentDidMount(){
//     this.getProvinsiData()
//   }
//   render() {
//     const columns = [{  
//       Header: 'PROVINSI',  
//       accessor: 'provinsi',
//      }
//      ,{  
//       Header: 'POSITIF',  
//       accessor: 'kasusPosi' ,
//       }
     
//      ,{  
//      Header: 'SEMBUH',  
//      accessor: 'kasusSem' ,
//      }
//      ,{  
//      Header: 'MENINGGAL',  
//      accessor: 'kasusMeni',
//      }
//   ]
//     return (
//       <ReactTable  
//       data={this.state.provinsi}  
//       columns={columns}  
//    />
//     )
//   }
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //import NumberFormat from "react-format-number";

// const Prov = () => {
//     const [kasusPosi, setKasusPosi] = useState([]);
//     const [kasusMeni, setKasusMeni] = useState([]);
//     const [kasusSem, setKasusSem] = useState([]);
   
//     useEffect(() => {axios  .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
//         .then((response) => 
//         {
//         setKasusPosi(response.data.kasusPosi);
//         setKasusMeni(response.data.kasusMeni);
//         setKasusSem(response.data.kasusSem);
//         })   
        
//     },[]);
    
//     return (<div align="center">
//     <table border="1" className="table-container">
//         <tr>
//             <th className="table-value-first">No</th>
//             <th className="table-value-second">Province</th>
//             <th className="table-value-third">Sembuh</th>
//             <th className="table-value-fourth">Perawatan</th>
//             <th className="table-value-fifth">Meninggal</th>
//         </tr>
//         {provinceData.map((item, index) => {
//             return(
//                 <tr>
//                     <th className="table-value-first"scope="row" key={item.fid}>{index + 1}</th>
//                     <th className="table-value-second">{item.provinsi}</th>
//                     <th className="table-value-third"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
//                     <th className="table-value-fourth"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
//                     <th className="table-value-fifth"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
//                 </tr>
//             )
//         })}
//     </table>
// </div>    
//         // <div>
//         // <h1 className="header-container"> Positif {kasusPosi} </h1>
//         // <h1 className="card-container"> Meninggal {kasusMeni} </h1>
//         // <h1 className="last-container"> Sembuh {kasusSem} </h1>
//         // </div>

//     );
// };
// export default Prov;

import React, {Component, useEffect, useState} from 'react'
 import Card from "./Components/card"
 import "./App.css"
 import axios from 'axios';

 class App extends Component {
     state = {
         users: [],
     };

     componentDidMount(){
         axios
             .get("https://jsonplaceholder.typicode.com/users")
             .then((response) => this.setState({users: response.data}))
     }
     render(){
         return(
             <>
                 {this.state.users.map((item)=>{
                     return(
                         <Card
                          name={item.name}
                          username={item.username}
                          email={item.email}
                            phone={item.phone} 
                        />
                    )
                })}
            </>
        )
    }
}