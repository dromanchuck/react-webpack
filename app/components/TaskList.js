import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.showList = () => {
            return this.props.value.map((item)=> <Task value={item} key={item.text} changeLike={this.props.changeLike} handleClick={this.props.remove}/>);
        };
    }
    render() {
        return (
            <div className="taskList">{this.showList()}</div>
        );
    }
}
export default TaskList;