import React from "react";
import {Link} from "react-router-dom";


class Details extends React.Component {

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>There are details of post
                </h1>
                <Link to="./creating">Back</Link>
            </div>
        );
    }
}
export default Details;