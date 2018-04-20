import React from 'react';
import TaskList from './components/TaskList.js';
import Input from './components/Input.js';
import './index.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './Details';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPost} from './redux/modules/posts/postsActions';

class Creating extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddPost = (item) => {
            this.props.addPost(item);
        };
        this.addTodo = (val) => {
            let date = new Date();
            let todo = {
                id:this.props.posts.length+1,
                text:val,
                date: date.toLocaleString(),
                like:false,
                author:'Dmitry Romanchuk',
                length:val.length
            };

            if(todo.text.length===0) {
                alert('You must be doing something wrong:)');
            } else {
                this.handleAddPost(todo);
                NotificationManager.success('The post is created','Post creating');
            }
        };
    }

    render() {
        const PrivateComponent = () => {
            return <TaskList/>
        };
        const secondPrivateComponent = () => {
            return <Details/>;
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

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    addPost
},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Creating);
