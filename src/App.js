import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Dunia, Indo, Prov } from './pages'



const App = () =>{
    return (
        <Router>
            <div>
                <nav>   
                    <h1><font size= '5'>  Covid-19 Tracker Site</font></h1>
                    <ul>
                        <li>
                            <Link to="/dunia">
                                Worldwide
                            </Link>
                        </li>
                        <li>
                            <Link to="/indo">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/prov">
                                Indonesian Province
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <Switch>
                <Route path="/indo">
                    <Indo />
                </Route>
                <Route path="/prov">
                    <Prov />
                </Route>
                <Route path="/dunia">
                    <Dunia />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
