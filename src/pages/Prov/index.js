import React, {Component} from 'react'

class Prov extends Component{

    constructor(props){
        super(props)
        this.state = {
            provinsi:[],
            isLoading:false,
            isError:false,
        }
        }
    
        async componentDidMount(){
            this.setState({isLoading:true})
            const response = await fetch ("https://indonesia-covid-19.mathdro.id/api/provinsi")
            
            if(response.ok){
                const provinsi = await response.json()
                console.log(provinsi)
                this.setState({provinsi,isLoading:false})
            }else{
                this.setState({isError:true,isLoading:false})
            }
            }
            renderTableHeader = () => {
                    return Object.keys(this.state.provinsi[0]).map(attr => <th key={attr}>
                    {attr.toUpperCase()}
                    </th>)
                     }
            

            renderTableRows = () => {
                        return this.state.provinsi.map(data => {
                            return (
                                <tr key={data.kodeProvi}>
                                <td>{data.provinsi}</td>
                                <td>{data.kasusPosi}</td>
                                <td>{data.kasusSemb}</td>
                                <td>{data.kasusMeni}</td>
                                {/* <td>{`${user.address.street},${user.adress.city}`}</td> */}
                                {/* <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td> */}
                                </tr>
                            )
                        })
            }
        
    render(){
        const {provinsi,isLoading,isError} = this.state

        if(isLoading){
        return <div> Loading...</div>
        }
        if(isError){
            return <div>Error...</div>
        }
        
        return provinsi.length > 0
        ? (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ):(
            <div> No Provinsi </div>
        )
    }
}
export default Prov