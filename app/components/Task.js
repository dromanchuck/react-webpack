import React from 'react';
import {Link } from "react-router-dom";

class Task extends React.Component {
    render() {
        return (
            <div>
                    <div>
                        <button onClick={()=>this.props.handleClick(this.props.value)}>delete</button>
                        <Link to='./details'>
                            <li onClick={()=>this.props.get(this.props.value)} className='post'>{this.props.value.text} | Created {this.props.value.date}</li>
                        </Link>
                    </div>
            </div>
        );
    }
}
export default Task;