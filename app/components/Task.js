import React from 'react';

class Task extends React.Component {
    render() {
        return <li className='post' onClick={()=>this.props.handleClick(this.props.value)}>{this.props.value.text} | Created {this.props.value.date}</li>
    }
}
export default Task;