import React from 'react';
import TaskList from './components/TaskList.js';
import Input from './components/Input.js';
import './index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from "./Details";

class Creating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {
                    id:1,
                    text:'akfnajsdfjansd',
                    date:(new Date).toLocaleString(),
                    like:true,
                    author:'MickJagger',
                    length:36
                },
                {
                    id:2,
                    text:'asdfasldkfnajsdfjansdfsdf',
                    date:(new Date).toLocaleString(),
                    like:true,
                    author:'MickJagger',
                    length:36
                },{
                    id:3,
                    text:'asdfasdfjansd',
                    date:(new Date).toLocaleString(),
                    like:true,
                    author:'MickJagger',
                    length:36
                },{
                    id:4,
                    text:'asddfjansd',
                    date:(new Date).toLocaleString(),
                    like:true,
                    author:'MickJagger',
                    length:36
                }],
            selectedPost:{}
        };
        this.addTodo = (val) => {
            let date = new Date();
            let todo = {
                id:this.state.data.length+1,
                text:val,
                date: date.toLocaleString(),
                like:false,
                author:'Dmitry Romanchuk',
                length:val.length
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
        this.get = (val) => {
            let index = this.state.data.indexOf(val);
            this.state.selectedPost = this.state.data[index];
            console.log(this.state.selectedPost);
        };
    }

    render() {
        const PrivateComponent = () => {
            return <TaskList value={this.state.data} remove={this.remove} get={this.get} select={this.state.selectedPost}/>
        };
        const secondPrivateComponent = () => {
            return <Details val={this.state.selectedPost}/>;
        };
            return (
                <div>
                    <Input addTodo = {this.addTodo}/>
                    <NotificationContainer/>
                    <Router>
                        <div>
                            <Route path='/creating' component={PrivateComponent}/>
                            <Route path='/details' component={secondPrivateComponent}/>
                        </div>
                    </Router>
                </div>
            )
        };
}
export default Creating;
