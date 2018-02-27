import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {
    render() {
        const arr = this.props.value;
        const list = [];
        for(let i = 0; i < arr.length; i++) {
            list.push(<Task value={arr[i]} handleClick={this.props.remove}/>);
        }
        return list;
    }
}
export default TaskList;