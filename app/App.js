import React from 'react';
import ReactDOM from 'react-dom';
import Creating from './Creating.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Title from "./components/Title";
import Home from "./Home";
import {Provider} from 'react-redux';
import store from './redux/store';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <Title/>
                <Router>
                    <div>
                        <ul className="switch">
                            <li>
                                <Link to="./">Home</Link>
                            </li>
                            <li>
                                <Link to="./creating"> Create post </Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/creating" component={Creating} />
                    </div>
                </Router>
            </div>
            </Provider>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);