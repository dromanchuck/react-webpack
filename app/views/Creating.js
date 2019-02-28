import React, { Component } from 'react';
import TaskList from '../components/TaskList.js';
import Input from '../components/Input.js';
import '../index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './Details';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPost} from '../redux/modules/posts/postsActions';

class Creating extends Component {
    constructor(props) {
        super(props);

        this.handleAddPost = (item) => {
            this.props.addPost(item);
        };
        this.addTodo = (val) => {
            let date = new Date();
            let todo = {
                id:this.props.posts.length + 1,
                text:val,
                date: date.toLocaleString(),
                like:false,
                author:'Dmitry Romanchuk',
                length:val.length
            };

            if(todo.text.length ===0 ) {
                alert('You must be doing something wrong:)');
            } 
            
            if(todo.text.length !== 0) {
                this.handleAddPost(todo);
                NotificationManager.success('The post is created','Post creating');
            }
        };
    }

    render() {
        return (
            <div>
                <Input addTodo = {this.addTodo}/>
                <NotificationContainer/>
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Route path='/creating' component={TaskList}/>
                        <Route path='/details' component={Details}/>
                    </div>
                </Router>
            </div>
        )
        };
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addPost
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Creating);
