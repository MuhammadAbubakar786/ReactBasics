import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './routing.css'
function Routing() {
    return (
        <React.Fragment>
            <header>

                <nav>
                    <ul className="container">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about us</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact us</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/jobs">jobs</Link>
                        </li>

                    </ul>
                </nav>
            </header>

        </React.Fragment>
    )
}

export default Routing
