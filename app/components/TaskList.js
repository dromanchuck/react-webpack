import React from 'react';
import Task from './Task.js';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.showList = () => {
            return this.props.value.map((item)=>
                <Task value={item}
                      key={item.text}
                      get={this.props.get}
                      handleClick={this.props.remove}
                      select={this.props.select}
                />);
        };
    }
    render() {
        return (
                <div className="taskList">{this.showList()}
                </div>
        );
    }
}
export default TaskList;