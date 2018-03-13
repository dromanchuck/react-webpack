import React from "react";
import {Link} from "react-router-dom";


class Details extends React.Component {

    render() {
        return (
            <div>
                <h1>Details of post #{this.props.val.id}
                </h1>
                <h2>Text:</h2>
                <p>{this.props.val.text}</p>
                <h2>Date of creating: {this.props.val.date}</h2>
                <h2>Author: {this.props.val.author}</h2>
                <h2>Count of Sympols: {this.props.val.length}</h2>
                <Link to="./creating">Back</Link>
            </div>
        );
    }
}
export default Details;