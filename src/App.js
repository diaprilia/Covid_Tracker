import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Dunia, Indo, Prov } from './pages'


const App = () =>{
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dunia">
                                Dunia
                            </Link>
                        </li>
                        <li>
                            <Link to="/indo">
                                Indo
                            </Link>
                        </li>
                        <li>
                            <Link to="/prov">
                                Prov
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
