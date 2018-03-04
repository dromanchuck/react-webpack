import React from 'react';
import ReactDOM from 'react-dom';
import Creating from './Creating.js';
import Bookmarks from './Bookmarks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Title from "./components/Title";
import Home from "./Home"



class App extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Router>
                    <div>
                        <ul className="switch">
                            <li>
                                <Link to="./">Home</Link>
                            </li>
                            <li>
                                <Link to="./Creating"> Create post </Link>
                            </li>
                            <li>
                                <Link to="./Bookmarks">Bookmarks</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Creating" component={Creating} />
                        <Route path="/Bookmarks" component={Bookmarks}/>
                    </div>
                </Router>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);