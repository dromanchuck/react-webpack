import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title.js';
import TaskList from './components/TaskList.js';
import Input from './components/Input.js';
import './index.css'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    addTodo(val) {
        let date = new Date();
        let todo = {
            text:val,
            date: date.toLocaleString()
        };
        if(todo.text.length===0) {
            alert('You must be doing something wrong:)');
        } else {
            console.log(this.state.data);
            this.state.data.push(todo);
            this.setState({data: this.state.data});
        }
    }
    remove(val) {
        let index = this.state.data.indexOf(val);
        this.state.data.splice(index,1);
        this.setState({data: this.state.data});
    }
    render() {
        return (
            <div>
                <Title count = {this.state.data.length}/>
                <Input addTodo = {this.addTodo.bind(this)}/>
                <TaskList value={this.state.data} remove={this.remove.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);