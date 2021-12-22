import React , {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Navbar extends Component {
    render(){
        return(
            <Router>
                <nav className="NavbarItems">
                    <ul className="nav-items">
                        {MenuItems.map((item,index) =>{
                            return(
                                <li key={index}><a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                <Link to={item.url}></Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </Router>
        );
    }
}
export default Navbar;
