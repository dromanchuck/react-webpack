import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.changeLike(this.props.value)} >like</button>
                <button onClick={()=>this.props.handleClick(this.props.value)}>delete</button>
                <li className='post'>{this.props.value.text} | Created {this.props.value.date}</li>
            </div>
        );
    }
}
export default Task;