import React from 'react';
import TaskList from './components/TaskList.js';
import Input from './components/Input.js';
import './index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Creating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
        this.addTodo = (val) => {
            let date = new Date();
            let todo = {
                text:val,
                date: date.toLocaleString(),
                like:false
            };
            if(todo.text.length===0) {
                alert('You must be doing something wrong:)');
            } else {
                this.state.data.push(todo);
                this.setState({data: this.state.data});
                NotificationManager.success('The post is created','Post creating');
            }
        };
        this.remove = (val) => {
            let index = this.state.data.indexOf(val);
            this.state.data.splice(index,1);
            this.setState({data: this.state.data});
            NotificationManager.error('The post is deleted','Post deleting');
        };
        this.changeLike = (val) => {
            let index = this.state.data.indexOf(val);
            let target = this.state.data[index].like;
            if(!!target) {
                this.state.data[index].like = false;
            } else {
                this.state.data[index].like = true;
            }
        }
    }
    render() {
        return (
            <div>
                <Input addTodo = {this.addTodo}/>
                <TaskList value={this.state.data} remove={this.remove} changeLike={this.changeLike}/>
                <NotificationContainer/>
            </div>
        )
    }
}
export default Creating;
